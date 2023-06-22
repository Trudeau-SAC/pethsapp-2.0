import { ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

/**
 * A horizontal scroll view containing multiple cards
 */
export default function CardRow({ children }) {
  const theme = useTheme();

  return (
    <ScrollView
      style={{
        overflow: 'visible',
        flexGrow: 0,
        minHeight: 160,
      }}
      contentContainerStyle={{
        gap: theme.spacing.s6,
        paddingHorizontal: theme.spacing.s5,
      }}
      showsHorizontalScrollIndicator={false}
      alwaysBounceHorizontal={false}
      horizontal
    >
      {children}
    </ScrollView>
  );
}
