import { Container } from './styles';
import { Props } from './types';

export function Button({ children, className }: Props) {
  return <Container className={className}>{children}</Container>;
}
