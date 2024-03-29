import { StyleSheet, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { tabBarHeight } from '../constants/sizes';
import { StatusBar, setStatusBarStyle } from 'expo-status-bar';

/**
 * Provides padding and gradient background for screens.
 */
export default function Layout({
  children,
  hasTabBar = false,
  statusBarStyle = 'auto',
}) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingTop: insets.top,
    },
    container: {
      paddingBottom:
        (hasTabBar ? tabBarHeight : insets.bottom) + theme.spacing.s5,
      paddingLeft: insets.left + theme.spacing.s5,
      paddingRight: insets.right + theme.spacing.s5,
    },
    gradient: {
      position: 'absolute',
      height: 164,
      top: 0,
      left: 0,
      right: 0,
    },
  });

  return (
    <>
      <StatusBar style={theme.dark ? 'light' : 'dark'} />
      <View style={styles.screen}>
        <LinearGradient
          style={styles.gradient}
          colors={[theme.colors.primary + '4D', theme.colors.primary + '00']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <ScrollView
          contentContainerStyle={styles.container}
          alwaysBounceVertical={false}
          scrollEventThrottle={16}
        >
          {children}
        </ScrollView>
        <View style={styles.statusBarBackground} />
      </View>
    </>
  );
}
