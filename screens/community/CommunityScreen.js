import { useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { clubs, opportunities, links } from '../../constants/community';

import Layout from '../../components/Layout';
import Text from '../../components/Text';
import RectangleCard from '../../components/RectangleCard';
import CardRow from '../../components/CardRow';
import LinkButton from '../../components/LinkButton';

const Community = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    section: {
      rowGap: theme.spacing.s4,
    },
    row: {
      marginHorizontal: -theme.spacing.s5,
    },
  });

  return (
    <Layout hasTabBar={true}>
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
        <View style={styles.section}>
          <Text color="text" variant="heading5">
            Clubs
          </Text>

          <View style={styles.row}>
            <CardRow>
              {clubs.map((club) => (
                <RectangleCard {...club} />
              ))}
            </CardRow>
          </View>
        </View>

        <View style={styles.section}>
          <Text color="text" variant="heading5">
            Opportunities
          </Text>

          <View style={styles.row}>
            <CardRow>
              {opportunities.map((opportunity) => (
                <RectangleCard {...opportunity} />
              ))}
            </CardRow>
          </View>
        </View>

        <View style={styles.section}>
          <Text color="text" variant="heading5">
            Links
          </Text>

          {links.map((link) => (
            <LinkButton {...link} />
          ))}
        </View>
      </View>
    </Layout>
  );
};

export default Community;
