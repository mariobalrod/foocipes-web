import { isLinkProps } from '$/utils/isLinkProps';

import {
  Component,
  Container,
  IconContainer,
  Label,
  RouterLink,
} from './styles';
import { Props, StyledProps } from './types';

export function Button(props: Props) {
  const { href, ...rest } = props;
  const styledProps: StyledProps = {
    $size: props.size ?? 'md',
    $variant: props.variant ?? 'primary',
    $iconPosition: props.iconPosition ?? 'right',
    $isReadonly: props.isReadonly ?? false,
    $isIconOnly: props.isIconOnly ?? false,
  };

  const Icon = props.icon;

  const isBigButton = props.size && ['lg', 'xl', '2xl'].includes(props.size);

  const component = (
    <Component
      {...rest}
      {...styledProps}
      weight="medium"
      variant={isBigButton ? 'body1' : 'body2'}
      tag={isLinkProps(props) ? 'span' : 'button'}
      {...(!isLinkProps(props) && {
        disabled: props.disabled,
        type: props.type ?? 'button',
      })}
    >
      <Label $isHidden={props.isIconOnly}>{props.label}</Label>
      {Icon && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}
    </Component>
  );

  return (
    <Container
      className={props.className}
      $isFullWidth={props.isFullWidth ?? false}
    >
      {href ? <RouterLink href={href}>{component}</RouterLink> : component}
    </Container>
  );
}
