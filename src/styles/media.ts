import { keysOf } from '$/utils/keysOf';
import { useEffect, useState } from 'react';

export type BreakpointSizes = keyof typeof sizes;

export const sizes = {
  zero: 0,
  mobileSmall: 320,
  mobile: 560,
  tabletPortrait: 767,
  tabletLandscape: 960,
  laptop: 1200,
  desktop: 1800,
} as const;

const minWidthQuery = (width: number) => `@media (min-width: ${width}px)`;

export const from: { [key in BreakpointSizes]: string } = keysOf(sizes).reduce(
  (acc, key) => ({
    ...acc,
    [key]: minWidthQuery(sizes[key]),
  }),
  {} as { [key in BreakpointSizes]: string },
);

export const useMediaQuery = (
  query: string,
  defaultValue?: boolean,
): boolean => {
  const mediaQuery = query.replace('@media', '').trim();
  const [match, setMatch] = useState<boolean>(!!defaultValue);

  useEffect(() => {
    setMatch(() => window.matchMedia(mediaQuery).matches);

    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) =>
      setMatch(event.matches);

    mediaQueryList.addEventListener('change', handleChange);

    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [mediaQuery]);

  return match;
};
