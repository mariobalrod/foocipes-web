import type { ReactNode, SelectHTMLAttributes } from 'react';

export type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  label: string;
  children: ReactNode;
  placeholder?: string;
  id?: string;
  errorMessage?: string;
  hideLabel?: boolean;
  disabled?: boolean;
  className?: string;
};
