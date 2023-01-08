// Provides styles common to all screens

import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

export default function Layout({ children }) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: theme.spacing.s5,
        paddingRight: theme.spacing.s5,
      }}
    >
      {children}
    </View>
  );
}
