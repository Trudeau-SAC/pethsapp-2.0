import { Button } from 'react-native';
import Layout from '../../components/Layout';
import Text from '../../components/Text';

const Home = ({ navigation }) => {
  return (
    <Layout hasTabBar>
      <Text variant="heading1" color="text">
        Home
      </Text>
      <Button title="Transit" onPress={() => navigation.navigate('Transit')} />
    </Layout>
  );
};

export default Home;
