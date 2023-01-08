import { StyleSheet, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

/**
 * Provides styles common to all screens
 * @param {boolean} scrolling - Whether the screen should scroll
 */
export default function Layout({ children, scrolling }) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // Padding is set to the safe area insets to avoid the notch on ios
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      // Left and right padding
      paddingLeft: theme.spacing.s5,
      paddingRight: theme.spacing.s5,
    },
  });

  // Renders a different type of container depending on whether the screen should scroll
  if (scrolling) {
    return <ScrollView style={styles.container}>{children}</ScrollView>;
  } else {
    return <View style={styles.container}>{children}</View>;
  }
}
