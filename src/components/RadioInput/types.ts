import { ChangeEvent, InputHTMLAttributes } from 'react';

export type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'size'
> & {
  name: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  hiddenLabel?: boolean;
  supportText?: string;
  size?: 'regular' | 'small';
};

export type StyledProps = {
  $size: Props['size'];
};
