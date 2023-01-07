// Theme info: https://shopify.engineering/5-ways-to-improve-your-react-native-styling-workflow

export const palette = {
  beige: '#FEFBEF',
  grey1: '#5C5C5C',
  grey2: '#E2E2E2',
  black: '#1B1717',
  red1: '#810000',
  red2: '#A54B4B',
  red3: '#F2C0C0',
};

export const theme = {
  dark: false,
  colors: {
    background: palette.beige,
    primary: palette.black,
    secondary: palette.red1,
    tertiary: palette.red2,
    neutral1: palette.grey1,
    neutral2: palette.grey2,
    onPrimary: palette.beige,
    card: palette.red1,
    text: palette.black,
    border: palette.black,
    notification: palette.beige,
  },
  fonts: {
    bold: 'GeneralSansBold',
    boldItalic: 'GeneralSansBoldItalic',
    semibold: 'GeneralSansSemiBold',
    semiboldItalic: 'GeneralSansSemiBoldItalic',
    medium: 'GeneralSansMedium',
    mediumItalic: 'GeneralSansMediumItalic',
    regular: 'GeneralSans',
    italic: 'GeneralSansItalic',
  },
  spacing: {
    s0_5: 2,
    s1: 4,
    s1_5: 6,
    s2: 8,
    s2_5: 10,
    s3: 12,
    s3_5: 14,
    s4: 16,
    s4_5: 18,
    s5: 20,
    s6: 24,
    s7: 28,
    s8: 32,
    s9: 36,
    s10: 40,
    s11: 44,
    s12: 48,
    s13: 52,
    s14: 56,
    s15: 60,
    s16: 64,
    s17: 68,
    s18: 72,
    s19: 76,
    s20: 80,
  },
  textVariants: {
    heading1: {
      fontSize: 60,
      fontWeight: 'semibold',
    },
    heading2: {
      fontSize: 48,
      fontWeight: 'semibold',
    },
    heading3: {
      fontSize: 36,
      fontWeight: 'semibold',
    },
    heading4: {
      fontSize: 32,
      fontWeight: 'medium',
    },
    heading5: {
      fontSize: 24,
      fontWeight: 'medium',
    },
    heading6: {
      fontSize: 20,
      fontWeight: 'medium',
    },
    heading7: {
      fontSize: 16,
      fontWeight: 'medium',
    },
    body1: {
      fontSize: 14,
      fontWeight: 'regular',
    },
    body2: {
      fontSize: 12,
      fontWeight: 'regular',
    },
  },
};

export const darkTheme = {
  ...theme,
  dark: true,
  colors: {
    background: palette.black,
    primary: palette.beige,
    secondary: palette.red3,
    tertiary: palette.red3,
    neutral1: palette.grey2,
    neutral2: palette.grey1,
    onPrimary: palette.beige,
    card: palette.red1,
    text: palette.beige,
    border: palette.beige,
    notification: palette.beige,
  },
};
