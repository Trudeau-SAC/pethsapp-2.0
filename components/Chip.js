import { StyleSheet, Pressable, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

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
      color: selected ? theme.colors.foreground : theme.colors.text,
    },
  });

  return (
    <Pressable style={styles.chip} onPress={onPress(title)}>
      <Text style={styles.text} variant="">
        {title}
      </Text>
    </Pressable>
  );
}
