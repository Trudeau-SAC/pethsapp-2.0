import { View, Button } from 'react-native';
import Layout from '../../components/Layout';
import HomeHeader from '../../components/HomeHeader';
import { useTheme } from '@react-navigation/native';
import ChipRow from '../../components/ChipRow';

const Home = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Layout>
      <View
        style={{
          marginTop: theme.spacing.s11,
          marginBottom: theme.spacing.s12,
        }}
      >
        <HomeHeader />
      </View>

      <ChipRow titles={['Twelve', 'Omori', 'Monika']} />
    </Layout>
  );
};

export default Home;
