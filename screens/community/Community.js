import { useTheme } from '@react-navigation/native';
import RectangleCard from '../../components/RectangleCard';
import Layout from '../../components/Layout';
import Text from '../../components/Text';

const Community = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Layout hasTabBar>
      <Text
        variant="heading2"
        color="text"
        style={{ marginTop: theme.spacing.s20 }}
      >
        Community
      </Text>
      <RectangleCard
        title="Clubs List"
        subtitle="Clubs Fair, TSAC Event, Soccer Team Tryouts, DECA Meeting..."
        supertitle="Sept. 19"
        navigateTo="Clubs List"
        imageSource={require('../../assets/graphics/clubs-list.png')}
      />
    </Layout>
  );
};

export default Community;
