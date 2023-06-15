import { typography } from '$/styles/themes/typography';
import styled, { css } from 'styled-components';

import { StyledProps } from './types';

export const Container = styled.p<StyledProps>`
  ${({ $variant }) => typography[$variant]}

  ${({ theme, $color }) =>
    $color &&
    css`
      color: ${theme.colors[$color]};
    `}

  ${({ theme, $weight }) =>
    $weight &&
    css`
      font-weight: ${theme.weights[$weight]};
    `}
`;
