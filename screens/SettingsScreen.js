import { useTheme } from '@react-navigation/native';

import Layout from '../components/Layout';
import Text from '../components/Text';
import Setting from '../components/Setting';

const Settings = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Text
        style={{
          marginTop: theme.spacing.s15,
          marginBottom: theme.spacing.s8,
        }}
        variant="heading2"
        color="text"
      >
        Settings
      </Text>

      <Setting name="Dark Mode" />
    </Layout>
  );
};

export default Settings;
