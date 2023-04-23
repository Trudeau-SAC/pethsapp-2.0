// Styles that are used across the app

import { lightTheme as theme } from './themes';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  backButton: {
    marginTop: theme.spacing.s15,
  },
  screenHeading2: {
    marginTop: theme.spacing.s15,
    marginBottom: theme.spacing.s8,
  },
  screenHeading3: {
    marginTop: theme.spacing.s8,
    marginBottom: theme.spacing.s8,
  },
  section: {
    rowGap: theme.spacing.s4,
  },
  sectionList: {
    rowGap: theme.spacing.s12,
  },
});

export default globalStyles;
