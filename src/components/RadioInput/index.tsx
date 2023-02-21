import { forwardRef } from 'react';

import {
  CheckMark,
  Circle,
  Container,
  Input,
  Label,
  Support,
  Text,
  Wrapper,
} from './styles';
import type { Props } from './types';

export const RadioInput = forwardRef<HTMLInputElement, Props>(
  function RadioInputComponent(
    {
      className,
      name,
      checked,
      disabled,
      id,
      label,
      onChange,
      hiddenLabel = false,
      supportText,
      size = 'regular',
      ...props
    },
    ref,
  ) {
    return (
      <Container $size={size}>
        <Label className={className}>
          <Wrapper>
            <Circle>
              <Input
                {...props}
                ref={ref}
                onChange={onChange}
                type="radio"
                defaultChecked={checked}
                disabled={disabled}
                name={name}
                id={id}
              />
              <CheckMark />
            </Circle>
            <Text
              variant={size === 'small' ? 'body2' : 'body1'}
              tag="span"
              weight="medium"
              $visuallyHidden={hiddenLabel}
            >
              {label}
            </Text>
          </Wrapper>
          {supportText ? (
            <Support variant={size === 'small' ? 'body2' : 'body1'} tag="p">
              {supportText}
            </Support>
          ) : null}
        </Label>
      </Container>
    );
  },
);
