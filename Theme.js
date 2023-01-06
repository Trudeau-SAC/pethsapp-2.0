import { createContext } from 'react';

const palette = {
  beige: '#FEFBEF',
  grey1: '#5C5C5C',
  grey2: '#ABABAB',
  black: '#1B1717',
  red1: '#810000',
  red2: '#A54B4B',
  red3: '#F2C0C0',
};

export const lightTheme = {
  colors: {
    primary: palette.red1,
    background: palette.beige,
    text: palette.black,
    onSurface: palette.beige,
    border: palette.black,
  },
};

export const darkTheme = {
  colors: {
    primary: palette.red1,
    background: palette.black,
    text: palette.beige,
    onSurface: palette.beige,
    border: palette.beige,
  },
};

export const ThemeContext = createContext();
