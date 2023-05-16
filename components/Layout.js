import { StyleSheet, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Provides padding and gradient background for screens.
 */
export default function Layout({ children, hasTabBar = true }) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      minHeight: '100%',
      paddingTop: theme.spacing.s5,
      paddingBottom:
        (hasTabBar ? theme.tabBarHeight : insets.bottom) + theme.spacing.s5,
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
    <ScrollView
      contentContainerStyle={styles.container}
      alwaysBounceVertical={false}
    >
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
