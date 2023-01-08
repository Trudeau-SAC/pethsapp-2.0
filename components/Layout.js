import { StyleSheet, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

/**
 * Provides a consistent layout for all screens
 * @param {boolean} hasTabBar - Whether the screen shows the tab bar, so padding can be added to the bottom
 */
export default function Layout({ children, hasTabBar }) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    },
    scrollView: {
      paddingLeft: theme.spacing.s5,
      paddingRight: theme.spacing.s5,
      paddingBottom: hasTabBar ? theme.tabBarHeight - insets.bottom : 0,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        alwaysBounceVertical={false}
      >
        {children}
      </ScrollView>
    </View>
  );
}
