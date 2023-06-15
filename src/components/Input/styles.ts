import { Text } from '$/components/Text';
import { resetButtonStyle, visuallyHidden } from '$/styles/mixins';
import { addAlpha } from '$/utils/addAlpha';
import styled, { css } from 'styled-components';

import { StyledProps } from './types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Label = styled(Text)<{ $visuallyHidden?: boolean }>`
  color: ${({ theme }) => theme.colors.gray700};
  ${({ $visuallyHidden }) => $visuallyHidden && visuallyHidden}
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<StyledProps>`
  width: 100%;
  padding: 0.625rem 0.875rem;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 1rem;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px ${({ theme }) => addAlpha(theme.colors.gray900, 0.05)};

  ${({ $isPasswordType }) =>
    $isPasswordType &&
    css`
      padding-inline-end: 2.5rem;
    `}

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }

  :focus-visible {
    border-color: ${({ theme }) => theme.colors.gray400};
    outline: none;
    box-shadow: 0 1px 2px ${({ theme }) => addAlpha(theme.colors.gray400, 0.06)},
      0 1px 3px ${({ theme }) => addAlpha(theme.colors.gray400, 0.1)},
      0 0 0 4px ${({ theme }) => addAlpha(theme.colors.gray400, 0.2)};
  }

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      border-color: ${theme.colors.errorDark};
      :focus-visible {
        border-color: ${theme.colors.errorDark};
        box-shadow: 0 0 0 4px ${theme.colors.errorExtraLight};
      }
    `}

  :disabled {
    background-color: ${({ theme }) => theme.colors.gray50};
    cursor: not-allowed;
  }
`;

export const PasswordToggler = styled.button`
  ${resetButtonStyle}
  position: absolute;
  width: 1rem;
  height: 1rem;
  color: ${({ theme }) => theme.colors.gray400};
  border-radius: 0.25rem;
  outline: none;
  outline-offset: 0;
  transform: translateY(-50%);
  inset-block-start: 50%;
  inset-inline-end: 0.875rem;
  transition: color 0.3s ease, background-color 0.3s ease, outline 0.3s ease;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.gray800};
  }
  &:active,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.gray800};
  }
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.gray200};
    outline: 0.25rem solid ${({ theme }) => theme.colors.gray200};
  }
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.colors.errorDark};
`;

export const ErrorIcon = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  color: ${({ theme }) => theme.colors.errorDark};
  transform: translateY(-50%);
  inset-block-start: 50%;
  inset-inline-end: 0.875rem;
`;
