import { AnchorHTMLAttributes } from 'react';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function isLinkProps(props: unknown): props is AnchorProps {
  return (props as AnchorProps).href !== undefined;
}
