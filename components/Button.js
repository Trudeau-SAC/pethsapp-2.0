import { useTheme } from '@react-navigation/native';
import Text from './Text';
import { Pressable } from 'react-native';
import { useState } from 'react';

const Button = ({ title, onPress }) => {
  const [pressed, setPressed] = useState(false);
  const theme = useTheme();

  return (
    <Pressable
      style={{
        backgroundColor: pressed
          ? theme.colors.primary
          : theme.colors.secondary,
        borderRadius: 100,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.border,
      }}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
    >
      <Text color="onPrimary" variant="heading7">
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
