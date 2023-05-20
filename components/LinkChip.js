import { Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { useState } from 'react';

import Text from './Text';

const LinkChip = ({ text, link }) => {
  const theme = useTheme();
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      style={({ pressed }) => ({
        paddingVertical: theme.spacing.s2,
        paddingHorizontal: theme.spacing.s3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: theme.spacing.s1,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: 100,
        alignSelf: 'flex-start',
        alignItems: 'center',
        backgroundColor: pressed
          ? theme.colors.primary
          : theme.colors.background,
      })}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => Linking.openURL(link)}
    >
      <Text variant="body2" color={isPressed ? 'background' : 'primary'}>
        {text}
      </Text>
      <Feather
        name="arrow-up-right"
        size={16}
        color={isPressed ? theme.colors.background : theme.colors.primary}
      />
    </Pressable>
  );
};

export default LinkChip;
