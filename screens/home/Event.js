import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { client } from '../../lib/sanity';
import { useTheme } from '@react-navigation/native';

import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';
import Text from '../../components/Text';
import RichText from '../../components/RichText';

export default function RichTextScreen({ route }) {
  const { title, id } = route.params;
  const [description, setDescription] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    let ignore = false;

    /**
     * Fetch description of specific event from Sanity
     */
    async function fetchDescription() {
      const result = await client.fetch(
        '*[_type == "event" && _id == $id] {description}',
        { id: id }
      );
      if (!ignore) setDescription(result[0].description);
    }
    fetchDescription();

    // Cleanup function
    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <Layout>
      <View
        style={{
          marginTop: theme.spacing.s15,
        }}
      >
        <BackButton />
      </View>

      <Text
        style={{
          marginTop: theme.spacing.s8,
          marginBottom: theme.spacing.s8,
        }}
        color="text"
        variant="heading3"
      >
        {title}
      </Text>

      <RichText value={description} />
    </Layout>
  );
}
