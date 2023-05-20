import { useTheme } from '@react-navigation/native';

import Layout from '../components/Layout';
import Text from '../components/Text';

const Resources = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Layout hasTabBar={true}>
      <Text
        style={{
          marginTop: theme.spacing.s15,
          marginBottom: theme.spacing.s8,
        }}
        variant="heading2"
        color="text"
      >
        Resources
      </Text>
    </Layout>
  );
};

export default Resources;
