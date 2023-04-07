import Layout from '../components/Layout';
import Text from '../components/Text';
import Setting from '../components/Setting';

const Settings = () => {
  return (
    <Layout>
      <Text variant="heading2" color="text">
        Settings
      </Text>

      <Setting name="Dark Mode" />
    </Layout>
  );
};

export default Settings;
