import { ScrollView, Text } from 'react-native';
import RectangleCard from '../../components/RectangleCard';
import Layout from '../../components/Layout';

const Community = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView>
        <Text style={{ fontFamily: 'GeneralSansItalic' }}>Community</Text>
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
