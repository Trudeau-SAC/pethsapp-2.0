import { ScrollView } from 'react-native';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import Text from '../../components/Text';

const Community = ({ navigation }) => {
  return (
    <Layout scrolling>
      <ScrollView>
        <Text variant="heading2" color="text">
          Community
        </Text>
        <Card
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
