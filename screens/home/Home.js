import { View, Button } from 'react-native';
import Layout from '../../components/Layout';
import Text from '../../components/Text';
import HomeHeader from '../../components/HomeHeader';
import { useTheme } from '@react-navigation/native';
import Chip from '../../components/Chip';

const Home = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Layout hasTabBar>
      <View
        style={{
          marginTop: theme.spacing.s16,
          marginBottom: theme.spacing.s12,
        }}
      >
        <HomeHeader />
      </View>
    </Layout>
  );
};

export default Home;
