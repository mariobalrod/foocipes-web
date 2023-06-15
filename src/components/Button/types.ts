import { ButtonSizes, ButtonVariants } from '$/styles/themes';
import { XOR } from '$/utils/types';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentType,
  ReactElement,
} from 'react';
import { UrlObject } from 'url';

type CommonProps = {
  label: string | ReactElement;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  icon?: ComponentType;
  isIconOnly?: boolean;
  iconPosition?: 'left' | 'right';
  className?: string;
  isReadonly?: boolean;
  isFullWidth?: boolean;
};

type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'color'
> &
  CommonProps;

type AnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children' | 'color' | 'href'
> &
  CommonProps & { href: string | UrlObject };

export type Props = XOR<ButtonProps, AnchorProps>;

export type StyledProps = {
  $size: CommonProps['size'];
  $variant: CommonProps['variant'];
  $isReadonly: CommonProps['isReadonly'];
  $isIconOnly: CommonProps['isIconOnly'];
  $iconPosition: CommonProps['iconPosition'];
};
