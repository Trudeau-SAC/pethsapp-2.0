import { ScrollView, Text } from 'react-native';
import Layout from '../../components/Layout';

const Resources = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView>
        <Text style={{ fontFamily: 'GeneralSansItalic' }}>Resources</Text>
      </ScrollView>
    </Layout>
  );
};

export default Resources;
