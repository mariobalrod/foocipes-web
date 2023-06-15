import { Colors, Weights } from '$/styles/themes';
import { typography } from '$/styles/themes/typography';
import { ReactNode } from 'react';

export type TVariants = keyof typeof typography;

export type Props = {
  children: ReactNode;
  tag: keyof JSX.IntrinsicElements;
  variant: TVariants;
  color?: Colors;
  weight?: Weights;
  className?: string;
};

export type StyledProps = {
  $variant: Props['variant'];
  $weight: Props['weight'];
  $color: Props['color'];
};
