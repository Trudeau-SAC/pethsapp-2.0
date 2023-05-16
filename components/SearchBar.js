import { View, StyleSheet, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar({ value, onChangeText, placeholder }) {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderWidth: 1,
      padding: 16,
      borderRadius: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    textInput: {
      ...theme.textVariants.heading7,
      color: theme.colors.text,
      height: 22,
      flex: 1,
    },
    icon: {
      color: theme.colors.text,
      marginRight: 12,
    },
  });

  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name="search" size={16} color="black" />
      <TextInput
        value={value}
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={theme.colors.text}
      />
    </View>
  );
}
