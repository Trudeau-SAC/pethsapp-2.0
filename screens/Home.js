import { View, Button } from 'react-native';
import Layout from '../components/Layout';
import HomeHeader from '../components/home/HomeHeader';
import { useTheme } from '@react-navigation/native';

const Home = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Layout>
      <HomeHeader />
    </Layout>
  );
};

export default Home;
