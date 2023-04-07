import { View, StyleSheet, Switch } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Text from './Text';
import { useSettings, useSettingsDispatch } from '../contexts/SettingsContext';

/**
 * Represents a setting in the settings screen
 */
export default function Setting({ name }) {
  const settings = useSettings();
  const dispatch = useSettingsDispatch();

  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderWidth: 1,
      padding: 19,
      borderRadius: 16,
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text variant="heading7" color="text">
        {name}
      </Text>
      <Switch
        onValueChange={() =>
          dispatch({
            type: 'toggle',
            name: name,
          })
        }
        value={settings[name]}
      />
    </View>
  );
}
