import { ChangeEvent, InputHTMLAttributes } from 'react';

export type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'size'
> & {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
  name?: string;
  supportText?: string;
  hiddenLabel?: boolean;
  size?: 'regular' | 'small';
};

export type StyledProps = {
  $size: Props['size'];
};
