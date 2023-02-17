import { APP_CONTAINER_WIDTH } from '$/styles/constants';
import { addAlpha } from '$/utils/addAlpha';
import type {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { css } from 'styled-components';

import { Theme } from './themes';

// Pretty Scrollbar
export const prettyScrollbar = ({
  color = 'gray200',
  vertical = true,
  size = '6px',
}: {
  color?: keyof Theme['colors'];
  vertical?: boolean;
  size?: string;
} = {}): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  overflow: overlay;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors[color]} transparent;
  &::-webkit-scrollbar {
    ${vertical
      ? css`
          width: ${size};
        `
      : css`
          height: ${size};
        `}
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors[color]};
    border-radius: 0.25rem;
  }
`;

export const textEllipsis = (
  lines = 2,
): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const resetButtonStyle = css`
  display: flex;
  padding: 0;
  background: transparent;
  border: none;
`;

export const visuallyHidden = css`
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
`;

export const focusRingCheckbox = css`
  box-shadow: 0 1px 2px
      ${({ theme }) => addAlpha(theme.colors.primary100, 0.06)},
    0 1px 3px ${({ theme }) => addAlpha(theme.colors.primary100, 0.1)},
    0 0 0 4px ${({ theme }) => addAlpha(theme.colors.primary100, 0.2)};
`;

export const maxContent = css`
  width: 100%;
  max-width: ${APP_CONTAINER_WIDTH};
`;
