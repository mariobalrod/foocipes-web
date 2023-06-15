import { Text as DefaultText } from '$/components/Text';
import { focusRingCheckbox, visuallyHidden } from '$/styles/mixins';
import styled, { css } from 'styled-components';

import { StyledProps } from './types';

export const CheckContainer = styled.span`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.gray300};
  border-radius: 0.25rem;

  @media screen and (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
    opacity: 0;
    transition: opacity 200ms ease;
  }
`;

export const HiddenInput = styled.input`
  ${visuallyHidden}
`;

export const Label = styled.label`
  display: flex;
  gap: 0.75rem;
  align-items: baseline;

  ${HiddenInput}:checked + & {
    ${CheckContainer} {
      background-color: ${({ theme }) => theme.colors.primary50};
      border-color: ${({ theme }) => theme.colors.primary400};

      svg {
        opacity: 1;
      }
    }
  }

  ${HiddenInput}:disabled + & {
    ${CheckContainer} {
      background-color: ${({ theme }) => theme.colors.gray100};
      border-color: ${({ theme }) => theme.colors.gray200};
      cursor: not-allowed;
    }
  }

  ${HiddenInput}:checked:disabled + & {
    ${CheckContainer} {
      color: ${({ theme }) => theme.colors.gray200};
      background-color: ${({ theme }) => theme.colors.gray100};
      border-color: ${({ theme }) => theme.colors.gray200};
    }
  }

  ${HiddenInput}:hover:not(:disabled) + & {
    ${CheckContainer} {
      background-color: ${({ theme }) => theme.colors.primary50};
      border-color: ${({ theme }) => theme.colors.primary400};
    }
  }

  ${HiddenInput}:focus-visible:not(:disabled) + & {
    ${CheckContainer} {
      border-color: ${({ theme }) => theme.colors.primary400};
      ${focusRingCheckbox}
    }
  }
`;

export const Text = styled(DefaultText)<{ $visuallyHidden: boolean }>`
  color: ${({ theme }) => theme.colors.gray700};
  ${({ $visuallyHidden }) => ($visuallyHidden ? visuallyHidden : ``)}
`;

export const Support = styled(DefaultText)`
  color: ${({ theme }) => theme.colors.gray500};
  margin-inline-start: 2rem;
`;

export const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;

  ${({ $size }) =>
    $size === 'small' &&
    css`
      ${CheckContainer} {
        width: 1rem;
        height: 1rem;

        svg {
          width: 0.75rem;
          height: 0.75rem;
        }
      }

      ${Label} {
        gap: 0.5rem;
      }

      ${Support} {
        margin-inline-start: 1.5rem;
      }
    `}
`;
