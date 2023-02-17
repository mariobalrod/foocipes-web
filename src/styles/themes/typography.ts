import { css } from 'styled-components';

export const typography = {
  largeTitle: css`
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 2.5rem;
    line-height: 1.4;
  `,
  title1: css`
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 2rem;
    line-height: 1.4;
  `,
  title2: css`
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 1.75rem;
    line-height: 1.4;
  `,
  title3: css`
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 1.5rem;
    line-height: 1.4;
  `,
  title4: css`
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 1.25rem;
    line-height: 1.5;
  `,
  title5: css`
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 1.125rem;
    line-height: 1.5;
  `,
  bodyBig: css`
    font-weight: ${({ theme }) => theme.weights.regular};
    font-size: 1.25rem;
    line-height: 1.6;
  `,
  body1: css`
    font-weight: ${({ theme }) => theme.weights.regular};
    font-size: 1rem;
    line-height: 1.5;
  `,
  body2: css`
    font-weight: ${({ theme }) => theme.weights.regular};
    font-size: 0.875rem;
    line-height: 1.4;
  `,
  body3: css`
    font-weight: ${({ theme }) => theme.weights.regular};
    font-size: 0.8125rem;
    line-height: 1.5;
  `,
  caption: css`
    font-weight: ${({ theme }) => theme.weights.regular};
    font-size: 0.75rem;
    line-height: 1.5;
  `,
  overline: css`
    font-weight: ${({ theme }) => theme.weights.regular};
    font-size: 0.625rem;
    line-height: 1.4;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  `,
};
