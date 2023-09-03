// theme_palette.js
import { colorPalette } from './palette';
import { shadows } from './shadows';

export const themes = {
  light: {
    colors: colorPalette.light,
    shadows,
  },
  dark: {
    colors: colorPalette.dark,
    shadows,
  },
};
