import { View } from 'react-native';
import globalStyles from '../../constants/global-styles';
import { useEffect, useState } from 'react';
import { client } from '../../lib/sanity';

import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';
import Text from '../../components/Text';
import RichText from '../../components/RichText';

export default function RichTextScreen({ route }) {
  const { title, id } = route.params;
  const [description, setDescription] = useState([]);

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
      <View style={globalStyles.backButton}>
        <BackButton />
      </View>

      <Text style={globalStyles.screenHeading3} color="text" variant="heading3">
        {title}
      </Text>

      <RichText value={description} />
    </Layout>
  );
}
