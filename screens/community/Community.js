import { useTheme } from '@react-navigation/native';
import RectangleCard from '../../components/RectangleCard';
import Layout from '../../components/Layout';
import Text from '../../components/Text';
import data from '../../constants/community';
import CardList from '../../components/CardList';

const Community = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Layout hasTabBar>
      <Text variant="heading2" color="text">
        Community
      </Text>
      <CardList data={data.Clubs} />
    </Layout>
  );
};

export default Community;
