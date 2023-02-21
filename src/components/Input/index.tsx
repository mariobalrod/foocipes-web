import AlertCircle from '$/assets/icons/alert-circle.svg';
import EyeOff from '$/assets/icons/eye-off.svg';
import Eye from '$/assets/icons/eye.svg';
import { Text } from '$/components/Text';
import { forwardRef, useReducer } from 'react';

import {
  Container,
  Error,
  ErrorIcon,
  InputContainer,
  Label,
  PasswordToggler,
  StyledInput,
} from './styles';
import { Props } from './types';

export const Input = forwardRef<HTMLInputElement, Props>(
  function InputComponent(
    {
      className,
      disabled,
      errorMessage,
      hideLabel,
      id,
      label,
      name,
      onChange,
      placeholder,
      required,
      type = 'text',
      ...props
    },
    ref,
  ) {
    const [showPassword, togglePasswordVisibility] = useReducer(
      (prev) => !prev,
      false,
    );
    const currentType =
      type !== 'password' || showPassword ? 'text' : 'password';

    return (
      <Container className={className}>
        <Label
          variant="body2"
          tag="label"
          weight="medium"
          $visuallyHidden={hideLabel}
        >
          {label}
        </Label>
        <InputContainer>
          <StyledInput
            type={currentType}
            id={id ?? name}
            ref={ref}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            $hasError={!!errorMessage}
            $isPasswordType={type === 'password'}
            disabled={disabled}
            {...props}
          />

          {errorMessage ? (
            <ErrorIcon>
              <AlertCircle />
            </ErrorIcon>
          ) : null}

          {type === 'password' && !errorMessage ? (
            <PasswordToggler
              type="button"
              onClick={togglePasswordVisibility}
              aria-label="Password toggler"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </PasswordToggler>
          ) : null}
        </InputContainer>

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
