import { useEffect, useState } from 'react';
import { client } from '../../lib/sanity';
import Layout from '../../components/Layout';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import Text from '../../components/Text';
import Resource from '../../components/Resource';
import { useSanityData } from '../../lib/sanity';

const Volunteering = () => {
  const theme = useTheme();
  const volunteering = useSanityData('*[_type == "volunteering"]');

  if (volunteering === null) {
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
      <Text style={styles.title} variant="heading3" color="text">
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
