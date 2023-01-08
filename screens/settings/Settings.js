import { Text, Switch } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';
import Layout from '../../components/Layout';

const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
  };

  return (
    <Layout>
      <Text style={{ fontFamily: 'GeneralSansItalic' }}>Settings</Text>
      <Switch value={theme == 'dark'} onValueChange={toggleTheme} />
    </Layout>
  );
};

export default Settings;
