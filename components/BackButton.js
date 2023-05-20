import { useTheme } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => ({
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: pressed
          ? theme.dark
            ? theme.colors.neutral1
            : theme.colors.neutral2
          : theme.colors.background,
        padding: theme.spacing.s2,
        borderColor: theme.colors.border,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      })}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Feather
        name="arrow-left"
        size={theme.spacing.s6}
        color={theme.colors.border}
      />
    </Pressable>
  );
};

export default BackButton;
