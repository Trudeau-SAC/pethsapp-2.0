import { useTheme } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Linking, View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import { Feather } from '@expo/vector-icons';

const LinkButton = ({ title, url, iconName }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    linkbutton: {
      borderColor: theme.colors.border,
      borderRadius: 16,
      backgroundColor: theme.colors.background,
      paddingVertical: 19,
      paddingHorizontal: 20,
      borderWidth: 1,
    },
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    linkname: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
  });

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    }
  }, [url]);

  return (
    <Pressable title={title} onPress={handlePress} style={styles.linkbutton}>
      <View style={styles.topRow}>
        <Feather name={iconName} size={20} color={theme.colors.text} />
        <View style={styles.linkname}>
          <Text variant="heading7" color="text">
            {title}
          </Text>
        </View>
        <Feather name="external-link" size={20} color={theme.colors.text} />
      </View>
    </Pressable>
  );
};

export default LinkButton;
