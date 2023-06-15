import DefaultStarIcon from '$/assets/icons/star.svg';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

export const StarWrapper = styled.div<{ $iconSizeRem: number }>`
  position: relative;
  overflow: hidden;
  ${({ $iconSizeRem }) =>
    css`
      width: ${$iconSizeRem}rem;
      height: ${$iconSizeRem}rem;
    `}
`;

export const StarBackground = styled(DefaultStarIcon)`
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.gray200};
`;

export const StarForegroundProgress = styled.div<{ $widthPercent?: number }>`
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  ${({ $widthPercent }) =>
    css`
      width: ${$widthPercent}%;
    `}
`;

export const StarForeground = styled(DefaultStarIcon)<{ $iconSizeRem: number }>`
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  color: ${({ theme }) => theme.colors.warningDark};
  ${({ $iconSizeRem }) =>
    css`
      width: ${$iconSizeRem}rem;
      height: ${$iconSizeRem}rem;
    `}
`;
