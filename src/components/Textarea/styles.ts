import { visuallyHidden } from '$/styles/mixins';
import { addAlpha } from '$/utils/addAlpha';
import styled, { css } from 'styled-components';

import { StyleProps } from './types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Label = styled.label<{ $visuallyHidden?: boolean }>`
  ${({ $visuallyHidden }) => $visuallyHidden && visuallyHidden}
  color: ${({ theme }) => theme.colors.gray700};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.4;
`;

export const StyledTextarea = styled.textarea<StyleProps>`
  width: 100%;
  height: 8rem;
  padding: 0.625rem 0.875rem;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 ${({ theme }) => addAlpha(theme.colors.gray900, 0.05)};
  resize: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray50};
    cursor: not-allowed;
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray300};
    }
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.gray400};
    box-shadow: 0 1px 2px ${({ theme }) => addAlpha(theme.colors.gray400, 0.06)},
      0 1px 3px ${({ theme }) => addAlpha(theme.colors.gray400, 0.1)},
      0 0 0 4px ${({ theme }) => addAlpha(theme.colors.gray400, 0.2)};
  }

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      border-color: ${theme.colors.errorDark};
      &:focus-visible {
        border-color: ${theme.colors.errorDark};
        box-shadow: 0 0 0 4px ${theme.colors.errorExtraLight};
      }
    `}
`;
