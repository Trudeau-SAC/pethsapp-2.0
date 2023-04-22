import { useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import Text from '../components/Text';
import RichText from '../components/RichText';

export default function RichTextScreen({ route, navigation }) {
  const theme = useTheme();
  const { title, content } = route.params;

  const styles = StyleSheet.create({
    backButton: {
      marginTop: theme.spacing.s15,
    },
    heading: {
      marginTop: theme.spacing.s8,
      marginBottom: theme.spacing.s8,
    },
  });

  return (
    <Layout>
      <View style={styles.backButton}>
        <BackButton />
      </View>

      <Text style={styles.heading} color="text" variant="heading3">
        {title}
      </Text>

      <RichText value={content} />
    </Layout>
  );
}
