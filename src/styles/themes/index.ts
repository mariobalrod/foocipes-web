import { light } from './light';

const untypedThemes = {
  light,
};

export type Theme = typeof light;
export type ThemeKey = keyof typeof untypedThemes;
export type Colors = keyof Theme['colors'];
export type Weights = keyof Theme['weights'];
export type ButtonSizes = (typeof light.buttons.sizes)[number];
export type ButtonVariants = (typeof light.buttons.variants)[number];

const themes: { [k in ThemeKey]: Theme } = untypedThemes;

export { themes };

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  // noinspection JSUnusedGlobalSymbols
  export interface DefaultTheme extends Theme {}
  /* eslint-enable @typescript-eslint/no-empty-interface */
}
