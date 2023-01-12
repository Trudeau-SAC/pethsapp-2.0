import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Provides a consistent layout for all screens
 * @param {boolean} hasTabBar - Whether the screen shows the tab bar, so padding can be added to the bottom
 */
export default function Layout({ children, hasTabBar }) {
  const insets = useSafeAreaInsets();
  const windowWidth = Dimensions.get('window').width;
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: insets.bottom,
    },
    scrollView: {
      minHeight: '100%',
      paddingLeft: theme.spacing.s5,
      paddingRight: theme.spacing.s5,
      paddingBottom: hasTabBar ? theme.tabBarHeight - insets.bottom : 0,
    },
    gradient: {
      position: 'absolute',
      height: 164,
      width: windowWidth,
      top: 0,
      left: 0,
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
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
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
    </View>
  );
}
