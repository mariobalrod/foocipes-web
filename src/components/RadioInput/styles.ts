import { Text as DefaultText } from '$/components/Text';
import { visuallyHidden } from '$/styles/mixins';
import styled, { css } from 'styled-components';

import { StyledProps } from './types';

export const Input = styled.input`
  ${visuallyHidden}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  align-items: flex-start;
`;

export const Circle = styled.span`
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  padding: 0.3125rem;
  cursor: pointer;
  margin-block-start: 0.2rem;
`;

export const CheckMark = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 50%;
  inset: 0;
  transition: background-color ease 0.2s, border-color ease 0.2s;

  &:before {
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary400};
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    transition: all 200ms cubic-bezier(0.19, 1, 0.22, 1);
    content: '';
    inset: 50%;

    @media (prefers-reduced-motion) {
      transition: none;
    }
  }

  ${Input}:checked + & {
    border: 1px solid ${({ theme }) => theme.colors.primary400};
    &:before {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }

  ${Input}:checked:disabled + & {
    background-color: ${({ theme }) => theme.colors.gray100};
    border-color: ${({ theme }) => theme.colors.gray200};
    &:before {
      background-color: ${({ theme }) => theme.colors.gray200};
    }
  }

  ${Input}:hover + & {
    background-color: ${({ theme }) => theme.colors.primary50};
    border-color: ${({ theme }) => theme.colors.primary400};
  }

  ${Input}:focus + & {
    border-color: ${({ theme }) => theme.colors.primary400};
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05),
      0 0 0 4px ${({ theme }) => theme.colors.primary100};
  }

  ${Input}:disabled + & {
    background-color: ${({ theme }) => theme.colors.gray100};
    border-color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const Text = styled(DefaultText)<{ $visuallyHidden: boolean }>`
  ${({ $visuallyHidden }) => ($visuallyHidden ? visuallyHidden : ``)}
`;

export const Support = styled(DefaultText)`
  color: ${({ theme }) => theme.colors.gray500};
  margin-inline-start: 1.8rem;
`;

export const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;

  ${({ $size }) =>
    $size === 'small' &&
    css`
      ${Circle} {
        width: 1rem;
        height: 1rem;
      }

      ${CheckMark} {
        &:before {
          width: 0.375rem;
          height: 0.375rem;
        }
      }

      ${Support} {
        margin-inline-start: 1.5rem;
      }
    `}
`;
