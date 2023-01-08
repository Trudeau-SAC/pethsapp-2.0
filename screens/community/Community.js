import { ScrollView } from 'react-native';
import RectangleCard from '../../components/RectangleCard';
import Layout from '../../components/Layout';
import Text from '../../components/Text';

const Community = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView>
        <Text variant="heading2" color="text">
          Community
        </Text>
        <RectangleCard
          title="Clubs List"
          subtitle="Clubs Fair, TSAC Event, Soccer Team Tryouts, DECA Meeting..."
          supertitle="Sept. 19"
          navigateTo="Clubs List"
          imageSource={require('../../assets/graphics/clubs-list.png')}
        />
      </ScrollView>
    </Layout>
  );
};

export default Community;
