import { Switch } from 'react-native';
import { useContext } from 'react';
import { SettingsContext } from '../utils/settingsContext';
import Layout from '../components/Layout';
import Text from '../components/ui/Text';

const Settings = () => {
  const { settings, setSettings } = useContext(SettingsContext);

  const toggleTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
  };

  return (
    <Layout>
      <Text variant="heading2" color="text">
        Settings
      </Text>
      <Switch value={theme == 'dark'} onValueChange={() => setSettings({
        ...settings,
        preferences: {
          ...settings.preferences,
          'Dark Mode': !settings.preferences['Dark Mode']
        }
      })} />
    </Layout>
  );
};

export default Settings;
