import { ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

/**
 * A horizontal scroll view containing multiple cards
 */
export default function CardRow({ children }) {
  const theme = useTheme();

  const views = children.map((child, index) => (
    <View
      key={child.key}
      style={{
        marginRight: index === children.length - 1 ? 0 : theme.spacing.s6,
      }}
    >
      {child}
    </View>
  ));

  return (
    <ScrollView
      style={{
        overflow: 'visible',
        flexGrow: 0,
        minHeight: 160,
      }}
      showsHorizontalScrollIndicator={false}
      alwaysBounceHorizontal={false}
      horizontal
    >
      {views}
    </ScrollView>
  );
}
