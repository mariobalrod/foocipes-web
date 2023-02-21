import { Text } from '$/components/Text';
import { resetButtonStyle, visuallyHidden } from '$/styles/mixins';
import styled, { css } from 'styled-components';
import DefaultRouterLink from 'next/link';

import { StyledProps } from './types';

export const Container = styled.div<{ $isFullWidth: boolean }>`
  width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'fit-content')};
`;

export const RouterLink = styled(DefaultRouterLink)`
  display: contents;
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
`;

export const Component = styled(Text)<StyledProps>`
  ${resetButtonStyle}
  display: flex;
  flex-direction: ${({ $iconPosition }) =>
    $iconPosition === 'right' ? 'row' : 'row-reverse'};
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  height: fit-content;
  white-space: nowrap;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  outline: none;
  outline-offset: 0;
  transition: color 0.3s ease, background-color 0.3s ease,
    border-color 0.3s ease;

  ${({ $isReadonly }) =>
    !$isReadonly &&
    css`
      &:disabled {
        cursor: not-allowed;
      }
    `}

  ${({ $variant, theme, $isReadonly, $isIconOnly }) => {
    switch ($variant) {
      case 'outlined':
        return css`
          color: ${theme.colors.gray700};
          background-color: ${theme.colors.white};
          border-color: ${theme.colors.gray300};

          svg {
            color: ${theme.colors.gray700};
          }

          &:disabled {
            color: ${theme.colors.gray300};
            border-color: ${theme.colors.gray200};

            svg {
              color: ${theme.colors.gray300};
            }
          }

          ${!$isReadonly &&
          css`
            &:not(:disabled) {
              &:hover,
              &:focus {
                color: ${theme.colors.gray800};
                background-color: ${theme.colors.gray50};
                border-color: ${theme.colors.gray300};
              }
              &:active,
              &:focus-visible {
                color: ${theme.colors.gray800};
                background-color: transparent;
                border-color: ${theme.colors.gray300};
              }
              &:focus-visible {
                outline: 0.25rem solid ${theme.colors.gray100};
              }
            }
          `}
        `;
      case 'ghost':
        return css`
          color: ${theme.colors[$isIconOnly ? 'gray500' : 'gray700']};
          background-color: transparent;

          svg {
            color: ${theme.colors[$isIconOnly ? 'gray500' : 'gray700']};
          }

          &:disabled {
            color: ${theme.colors.gray300};

            svg {
              color: ${theme.colors.gray300};
            }
          }

          ${!$isReadonly &&
          css`
            &:not(:disabled) {
              &:hover,
              &:focus {
                color: ${theme.colors.gray800};
                background-color: ${theme.colors.gray50};
              }
              &:active,
              &:focus-visible {
                color: ${theme.colors.gray800};
                background-color: transparent;
                border-color: ${theme.colors.gray300};
              }
              &:focus-visible {
                outline: 0.25rem solid ${theme.colors.gray100};
              }
            }
          `}
        `;
      default:
      case 'primary':
        return css`
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary400};

          svg {
            color: ${theme.colors.gray200};
          }

          &:disabled {
            color: ${theme.colors.gray400};
            background-color: ${theme.colors.gray100};

            svg {
              color: ${theme.colors.gray400};
            }
          }

          ${!$isReadonly &&
          css`
            &:not(:disabled) {
              &:hover,
              &:focus {
                background-color: ${theme.colors.primary500};
              }
              &:active,
              &:focus-visible {
                background-color: ${theme.colors.primary400};
              }
              &:focus-visible {
                outline: 0.25rem solid ${theme.colors.gray300};
              }
            }
          `}
        `;
    }
  }}

  ${({ $size, $isIconOnly }) => {
    switch ($size) {
      case 'xs':
        return css`
          width: ${$isIconOnly ? '2.25rem' : 'inherit'};
          height: 2.25rem;
          padding-inline: ${$isIconOnly ? '0.25rem' : '0.75rem'};
        `;
      case 'sm':
        return css`
          width: ${$isIconOnly ? '2.5rem' : 'inherit'};
          height: 2.5rem;
          padding-inline: ${$isIconOnly ? '0.5rem' : '0.75rem'};
        `;
      default:
      case 'md':
        return css`
          width: ${$isIconOnly ? '2.75rem' : 'inherit'};
          height: 2.75rem;
          padding-inline: ${$isIconOnly ? '0.625rem' : '1rem'};
        `;
      case 'lg':
        return css`
          width: ${$isIconOnly ? '3rem' : 'inherit'};
          height: 3rem;
          padding-inline: ${$isIconOnly ? '0.75rem' : '1.25rem'};
        `;
      case 'xl':
        return css`
          width: ${$isIconOnly ? '3.25rem' : 'inherit'};
          height: 3.25rem;
          padding-inline: ${$isIconOnly ? '0.875rem' : '1.5rem'};
        `;
      case '2xl':
        return css`
          width: ${$isIconOnly ? '3.5rem' : 'inherit'};
          height: 3.5rem;
          padding-inline: ${$isIconOnly ? '1.125rem' : '1.75rem'};

          ${IconContainer} {
            width: 1.25rem;
            height: 1.25rem;
          }
        `;
    }
  }}


  ${({ $isReadonly }) =>
    $isReadonly &&
    css`
      cursor: text;
    `}
`;

export const Label = styled.span<{ $isHidden: StyledProps['$isIconOnly'] }>`
  ${({ $isHidden }) => $isHidden && visuallyHidden}
`;
