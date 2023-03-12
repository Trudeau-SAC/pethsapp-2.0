import Layout from '../../components/Layout';
import Text from '../../components/ui/Text';
import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';

const ClubsList = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Text variant="heading2" color="text">
        Clubs List
      </Text>
    </Layout>
  );
};

export default ClubsList;
