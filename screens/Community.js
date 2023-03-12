import { useTheme } from '@react-navigation/native';
import Layout from '../components/Layout';
import Text from '../components/ui/Text';
import data from '../constants/data';

const Community = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Layout>
      <Text variant="heading2" color="text">
        Community
      </Text>
    </Layout>
  );
};

export default Community;
