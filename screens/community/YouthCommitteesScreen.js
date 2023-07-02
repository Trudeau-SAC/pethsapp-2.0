import { useSanityData } from '../../lib/sanity';
import Layout from '../../components/Layout';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import Text from '../../components/Text';
import Resource from '../../components/Resource';

const YouthCommittees = () => {
  const theme = useTheme();
  const youthCommittees = useSanityData('*[_type == "youthCommittee"]');

  if (youthCommittees === null) {
    return <Text>Loading...</Text>;
  }

  const styles = StyleSheet.create({
    backButton: {
      marginTop: theme.spacing.s15,
      marginBottom: theme.spacing.s9,
    },
    title: {
      marginBottom: theme.spacing.s8,
    },
  });

  return (
    <Layout>
      {/* Back button */}
      <View style={styles.backButton}>
        <BackButton />
      </View>

      {/* Title */}
      <Text style={styles.title} variant="heading2" color="text">
        Youth Committees
      </Text>

      {/* Resources */}
      <View style={{ rowGap: theme.spacing.s12 }}>
        {youthCommittees.map((youthCommittee) => (
          <Resource
            key={youthCommittee._id}
            name={youthCommittee.name}
            description={youthCommittee.description}
            link={youthCommittee.link}
          />
        ))}
      </View>
    </Layout>
  );
};

export default YouthCommittees;
