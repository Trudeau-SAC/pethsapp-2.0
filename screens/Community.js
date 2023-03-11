import { useTheme } from '@react-navigation/native';
import RectangleCard from '../components/RectangleCard';
import Layout from '../components/Layout';
import Text from '../components/Text';
import data from '../constants/data';
import CardRow from '../components/CardRow';

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
