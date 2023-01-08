import { Button, ScrollView } from 'react-native';
import Layout from '../../components/Layout';
import Text from '../../components/Text';

const Home = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView>
        <Text variant="heading1" color="text">
          Home
        </Text>
        <Button
          title="Transit"
          onPress={() => navigation.navigate('Transit')}
        />
      </ScrollView>
    </Layout>
  );
};

export default Home;
