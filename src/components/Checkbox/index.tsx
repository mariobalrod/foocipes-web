import Checkmark from '$/assets/icons/check.svg';
import { forwardRef } from 'react';

import {
  CheckContainer,
  Container,
  HiddenInput,
  Label,
  Support,
  Text,
} from './styles';
import type { Props } from './types';

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  function CheckboxComponent(
    {
      name,
      className,
      label,
      id = name,
      disabled,
      checked,
      onChange,
      hiddenLabel = false,
      supportText,
      size = 'regular',
      ...props
    },
    ref,
  ) {
    return (
      <Container $size={size} className={className}>
        <HiddenInput
          {...props}
          type="checkbox"
          onChange={onChange}
          name={name}
          id={id}
          disabled={!!disabled}
          defaultChecked={checked}
          ref={ref}
        />
        <Label htmlFor={id}>
          <CheckContainer aria-disabled={disabled}>
            <Checkmark />
          </CheckContainer>
          <Text
            variant={size === 'small' ? 'body2' : 'body1'}
            tag="span"
            weight="medium"
            $visuallyHidden={hiddenLabel}
          >
            {label}
          </Text>
        </Label>
        {supportText ? (
          <Support variant={size === 'small' ? 'body2' : 'body1'} tag="p">
            {supportText}
          </Support>
        ) : null}
      </Container>
    );
  },
);
