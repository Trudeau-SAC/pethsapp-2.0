import { ScrollView } from 'react-native';
import Layout from '../../components/Layout';
import Text from '../../components/Text';

const Resources = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView>
        <Text variant="heading2" color="text">
          Resources
        </Text>
      </ScrollView>
    </Layout>
  );
};

export default Resources;
