import { Text } from '$/components/Text';
import { forwardRef } from 'react';

import {
  Container,
  Error,
  Icon,
  Label,
  SelectWrapper,
  StyledInput,
} from './styles';
import type { Props } from './types';

export const Select = forwardRef<HTMLSelectElement, Props>(
  function SelectComponent(
    {
      children,
      disabled = false,
      placeholder,
      label,
      name,
      id,
      hideLabel,
      errorMessage,
      className,
      ...props
    },
    ref,
  ) {
    return (
      <Container className={className}>
        {label ? (
          <Label
            variant="body2"
            tag="label"
            weight="medium"
            $visuallyHidden={hideLabel}
            {...{ htmlFor: name }}
          >
            {label}
          </Label>
        ) : null}
        <SelectWrapper $disabled={disabled} $hasError={!!errorMessage}>
          <StyledInput
            disabled={disabled}
            name={name}
            id={id}
            ref={ref}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {children}
          </StyledInput>
          <Icon />
        </SelectWrapper>
        {errorMessage ? (
          <Error>
            <Text variant="body2" tag="p">
              {errorMessage}
            </Text>
          </Error>
        ) : null}
      </Container>
    );
  },
);
