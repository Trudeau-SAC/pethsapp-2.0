import { View, Button } from 'react-native';
import Layout from '../components/Layout';
import HomeHeader from '../components/HomeHeader';
import { useTheme } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';

const Home = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Layout>
      <HomeHeader />

      <SearchBar value="" placeholder="Search for clubs..." />
    </Layout>
  );
};

export default Home;
