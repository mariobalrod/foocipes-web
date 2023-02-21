import { InputHTMLAttributes } from 'react';

export type Props = InputHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  id: string;
  label: string;
  errorMessage?: string;
  className?: string;
  hasError?: boolean;
  helpMessage?: string;
  hideLabel?: boolean;
};

export type StyleProps = {
  $hasError: Props['hasError'];
};
