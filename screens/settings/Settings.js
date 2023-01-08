import { Switch } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';
import Layout from '../../components/Layout';
import Text from '../../components/Text';

const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
  };

  return (
    <Layout>
      <Text variant="heading2" color="text">
        Settings
      </Text>
      <Switch value={theme == 'dark'} onValueChange={toggleTheme} />
    </Layout>
  );
};

export default Settings;
