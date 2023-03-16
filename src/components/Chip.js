import { StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Text from './Text';

export default function Chip({ title, selected, onPress }) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    chip: {
      backgroundColor: selected
        ? theme.colors.foreground
        : theme.colors.background,
      borderColor: theme.colors.border,
      borderRadius: 100,
      borderWidth: 1,
      paddingVertical: 8,
      paddingHorizontal: 16,
      alignSelf: 'flex-start',
    },
    text: {
      color: selected ? theme.colors.background : theme.colors.text,
    },
  });

  return (
    <Pressable style={styles.chip} onPress={() => onPress(title)}>
      <Text color={selected ? 'background' : 'text'} variant="body1">
        {title}
      </Text>
    </Pressable>
  );
}
