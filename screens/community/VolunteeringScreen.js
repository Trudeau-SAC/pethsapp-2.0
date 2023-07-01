import { useEffect, useState } from 'react';
import { client } from '../../lib/sanity';
import Layout from '../../components/Layout';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import Text from '../../components/Text';
import Resource from '../../components/Resource';

const Volunteering = () => {
  const theme = useTheme();
  const [volunteering, setVolunteering] = useState([]);

  const styles = StyleSheet.create({
    backButton: {
      marginTop: theme.spacing.s15,
      marginBottom: theme.spacing.s9,
    },
    title: {
      marginBottom: theme.spacing.s8,
    },
  });

  useEffect(() => {
    let ignore = false;

    async function fetchVolunteering() {
      const result = await client.fetch('*[_type == "volunteering"]');
      if (!ignore) {
        setVolunteering(result);
      }
    }
    fetchVolunteering();

    // Cleanup function
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Layout>
      {/* Back button */}
      <View style={styles.backButton}>
        <BackButton />
      </View>

      {/* Title */}
      <Text style={styles.title} variant="heading2" color="text">
        Volunteering
      </Text>

      {/* Resources */}
      <View style={{ rowGap: theme.spacing.s12 }}>
        {volunteering.map((volunteering) => (
          <Resource
            key={volunteering._id}
            name={volunteering.name}
            description={volunteering.description}
            link={volunteering.link}
          />
        ))}
      </View>
    </Layout>
  );
};

export default Volunteering;
