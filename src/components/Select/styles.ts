import Chevron from '$/assets/icons/chevron-down.svg';
import { Text } from '$/components/Text';
import { visuallyHidden } from '$/styles/mixins';
import { addAlpha } from '$/utils/addAlpha';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Label = styled(Text)<{ $visuallyHidden?: boolean }>`
  color: ${({ theme }) => theme.colors.gray700};
  ${({ $visuallyHidden }) => $visuallyHidden && visuallyHidden}
`;

export const SelectWrapper = styled.div<{
  $disabled: boolean;
  $hasError: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.75rem;
  text-align: start;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 0.5rem;
  outline: none;
  box-shadow: 0 1px 2px ${({ theme }) => addAlpha(theme.colors.gray900, 0.05)};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.gray400};
    box-shadow: 0 1px 2px ${({ theme }) => addAlpha(theme.colors.gray400, 0.06)},
      0 1px 3px ${({ theme }) => addAlpha(theme.colors.gray400, 0.1)},
      0 0 0 4px ${({ theme }) => addAlpha(theme.colors.gray400, 0.2)};
  }

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      border-color: ${theme.colors.errorDark};
      &:focus-within {
        border-color: ${theme.colors.errorDark};
        box-shadow: 0 0 0 4px ${theme.colors.errorExtraLight};
      }
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      background: ${({ theme }) => theme.colors.gray50};
    `}
`;

export const StyledInput = styled.select`
  width: 100%;
  height: 100%;
  padding-block: 0.625rem;
  padding-inline: 0.875rem 2.5rem;
  color: ${({ theme }) => theme.colors.gray500};
  font-size: 1rem;
  line-height: 1.5;
  background: none;
  border: none;
  outline: none;
  transition: 0.2s ease-in-out all;
  appearance: none;
  padding-inline-end: 2.5rem;

  :disabled {
    cursor: not-allowed;
  }
`;

export const Icon = styled(Chevron)`
  position: absolute;
  top: 50%;
  right: 0;
  color: ${({ theme }) => theme.colors.gray900};
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.colors.errorDark};
`;
