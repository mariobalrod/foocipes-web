import { Text } from '$/components/Text';
import { forwardRef } from 'react';

import { Container, Label, StyledTextarea } from './styles';
import { Props } from './types';

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  function Textarea(
    {
      className,
      errorMessage,
      hasError,
      helpMessage,
      hideLabel = false,
      id,
      label,
      name,
      placeholder,
      ...props
    }: Props,
    ref,
  ) {
    return (
      <Container className={className}>
        <Label $visuallyHidden={hideLabel} htmlFor={id}>
          {label}
        </Label>

        <StyledTextarea
          {...props}
          id={id ?? name}
          name={name}
          placeholder={placeholder}
          ref={ref}
          $hasError={!!hasError || !!errorMessage}
        />

        {!!hasError || !!errorMessage ? (
          <Text variant="body2" tag="p" color="errorDark">
            {errorMessage}
          </Text>
        ) : null}

        {helpMessage ? (
          <Text variant="body2" tag="p" color="gray500">
            {helpMessage}
          </Text>
        ) : null}
      </Container>
    );
  },
);
