import { StyleSheet, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Provides a consistent layout for all screens
 */
export default function Layout({ children }) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingTop: insets.top + theme.spacing.s5,
      paddingBottom: theme.tabBarHeight + theme.spacing.s5,
      paddingLeft: insets.left + theme.spacing.s5,
      paddingRight: insets.right + theme.spacing.s5,
    },
    gradient: {
      position: 'absolute',
      height: 164,
      left: 0,
      right: 0,
    },
    topBackground: {
      backgroundColor: theme.colors.primary + '4D',
      height: 1000,
      position: 'absolute',
      top: -1000,
      left: 0,
      right: 0,
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* View so that when the screen bounces on IOS, the background is consistent */}
      <View style={styles.topBackground} />
      <LinearGradient
        style={styles.gradient}
        colors={[theme.colors.primary + '4D', theme.colors.primary + '00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      {children}
    </ScrollView>
  );
}
