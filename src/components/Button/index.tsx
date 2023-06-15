import { Component } from './styles';
import { Props } from './types';

export function Button({ children, className }: Props) {
  return <Component className={className}>{children}</Component>;
}
