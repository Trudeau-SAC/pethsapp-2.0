import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { clubs, opportunities } from '../constants/community';

import Layout from '../components/Layout';
import Text from '../components/Text';
import RectangleCard from '../components/RectangleCard';
import CardRow from '../components/CardRow';

const Community = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Layout>
      <Text
        style={{
          marginTop: theme.spacing.s15,
          marginBottom: theme.spacing.s8,
        }}
        variant="heading2"
        color="text"
      >
        Community
      </Text>

      <View style={{ rowGap: theme.spacing.s12 }}>
        <View style={{ rowGap: theme.spacing.s4 }}>
          <Text color="text" variant="heading5">
            Clubs
          </Text>

          <CardRow>
            {clubs.map((club) => (
              <RectangleCard {...club} />
            ))}
          </CardRow>
        </View>

        <View style={{ rowGap: theme.spacing.s4 }}>
          <Text color="text" variant="heading5">
            Opportunities
          </Text>

          <CardRow>
            {opportunities.map((opportunity) => (
              <RectangleCard {...opportunity} />
            ))}
          </CardRow>
        </View>

        <View style={{ rowGap: theme.spacing.s4 }}>
          <Text color="text" variant="heading5">
            Links
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default Community;
