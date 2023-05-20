import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native';

export default function ChipRow({ children }) {
  const theme = useTheme();

  return (
    <ScrollView
      style={{
        overflow: 'visible',
      }}
      contentContainerStyle={{
        flexDirection: 'row',
        columnGap: theme.spacing.s3,
      }}
      showsHorizontalScrollIndicator={false}
      alwaysBounceHorizontal={false}
      horizontal
    >
      {children}
    </ScrollView>
  );
}
