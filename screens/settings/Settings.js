import { StyleSheet, Text, View, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';

const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'GeneralSansItalic' }}>Settings</Text>
      <StatusBar style="auto" />
      <Switch value={theme == 'dark'} onValueChange={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Settings;
