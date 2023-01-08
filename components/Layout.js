import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Provides styles common to all screens
 * @param {boolean} scrolling - Whether the screen should scroll
 */
export default function Layout({ children, scrolling }) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const content = (
    <>
      <LinearGradient
        style={{
          height: 162,
        }}
        colors={[theme.colors.primary + 'FF', theme.colors.primary + '00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <View
        style={{
          flex: 1,
          // Padding is set to the safe area insets to avoid the notch on ios
          paddingTop: insets.top,
          // Account for tab bar height
          paddingBottom: theme.tabBarHeight,
          // Left and right padding
          paddingLeft: theme.spacing.s5,
          paddingRight: theme.spacing.s5,
          position: 'absolute',
          top: 0,
        }}
      >
        {children}
      </View>
    </>
  );

  // Renders a different type of container depending on whether the screen should scroll
  return <ScrollView>{content}</ScrollView>;
}
