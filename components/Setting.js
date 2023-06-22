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
      paddingVertical: theme.spacing.s3_5,
      paddingHorizontal: theme.spacing.s5,
      borderRadius: 16,
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    switch: {
      height: 32,
    },
  });

  return (
    <View style={styles.container}>
      <Text variant="heading7" color="text">
        {name}
      </Text>
      <Switch
        style={styles.switch}
        onValueChange={() =>
          dispatch({
            type: 'changed',
            name: name,
            value: !settings[name],
          })
        }
        value={settings[name]}
      />
    </View>
  );
}
