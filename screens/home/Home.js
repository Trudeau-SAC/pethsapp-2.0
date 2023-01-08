import { Button, ScrollView, Text } from 'react-native';
import Layout from '../../components/Layout';

const Home = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView>
        <Text style={{ fontFamily: 'GeneralSansItalic' }}>Home</Text>
        <Button
          title="Transit"
          onPress={() => navigation.navigate('Transit')}
        />
      </ScrollView>
    </Layout>
  );
};

export default Home;
