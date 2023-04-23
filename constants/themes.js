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

export const fonts = {
  bold: 'GeneralSansBold',
  boldItalic: 'GeneralSansBoldItalic',
  semibold: 'GeneralSansSemiBold',
  semiboldItalic: 'GeneralSansSemiBoldItalic',
  medium: 'GeneralSansMedium',
  mediumItalic: 'GeneralSansMediumItalic',
  regular: 'GeneralSansRegular',
  italic: 'GeneralSansItalic',
};

export const lightTheme = {
  dark: false,
  colors: {
    background: palette.beige,
    foreground: palette.black,
    primary: palette.red1,
    secondary: palette.red2,
    tertiary: palette.red3,
    neutral1: palette.grey1,
    neutral2: palette.grey2,
    onPrimary: palette.beige,
    card: palette.red1,
    text: palette.black,
    border: palette.black,
    notification: palette.red1,
    logo: palette.red1,
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
      fontFamily: fonts.semibold,
      fontSize: 60,
    },
    heading2: {
      fontFamily: fonts.semibold,
      fontSize: 48,
    },
    heading3: {
      fontFamily: fonts.semibold,
      fontSize: 36,
    },
    heading4: {
      fontFamily: fonts.medium,
      fontSize: 32,
    },
    heading5: {
      fontFamily: fonts.medium,
      fontSize: 24,
    },
    heading6: {
      fontFamily: fonts.medium,
      fontSize: 20,
    },
    heading7: {
      fontFamily: fonts.medium,
      fontSize: 16,
    },
    body1: {
      fontFamily: fonts.regular,
      fontSize: 14,
    },
    body2: {
      fontFamily: fonts.regular,
      fontSize: 12,
    },
    cardTitle: {
      fontFamily: fonts.semibold,
      fontSize: 20,
    },
    logo: {
      fontFamily: fonts.bold,
      fontSize: 12,
    },
  },
  tabBarHeight: 100, // Tab bar overlaps content, so padding must be added to bottom of content so it all shows
};

export const darkTheme = {
  ...lightTheme,
  dark: true,
  colors: {
    ...lightTheme.colors,
    background: palette.black,
    foreground: palette.beige,
    text: palette.beige,
    border: palette.beige,
    logo: palette.red3,
  },
};
