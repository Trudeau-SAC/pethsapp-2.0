import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Text from './Text';

/**
 * Represents a setting in the settings screen
 *
 * @param {string} name Name of the setting
 * @param {boolean} enabled Whether the setting is enabled
 * @returns
 */
export default function Setting({ name, enabled }) {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderWidth: 1,
      padding: 20,
      borderRadius: 16,
    },
  });

  return (
    <View style={styles.container}>
      <Text variant="heading7" color="text">
        {name}
      </Text>
    </View>
  );
}
