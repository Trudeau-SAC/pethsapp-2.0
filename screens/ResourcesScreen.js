import { useTheme } from '@react-navigation/native';
import Layout from '../components/Layout';
import Text from '../components/Text';
import { StyleSheet, View } from 'react-native';
import { materials, links } from '../constants/resources';
import CardRow from '../components/CardRow';
import RectangleCard from '../components/RectangleCard';
import LinkButton from '../components/LinkButton';

const Resources = () => {
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
      {/* Title */}
      <Text
        style={{
          marginTop: theme.spacing.s15,
          marginBottom: theme.spacing.s8,
        }}
        variant="heading2"
        color="text"
      >
        Resources
      </Text>

      <View style={{ rowGap: theme.spacing.s12 }}>
        {/* Materials section */}
        <View style={styles.section}>
          <Text color="text" variant="heading5">
            Materials
          </Text>

          <View style={styles.row}>
            <CardRow>
              {materials.map((materials) => (
                <RectangleCard {...materials} />
              ))}
            </CardRow>
          </View>
        </View>

        {/* Links section */}
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

export default Resources;
