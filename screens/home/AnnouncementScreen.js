import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';
import Text from '../../components/Text';
import RichText from '../../components/RichText';

export default function RichTextScreen({ route }) {
  const { title, body } = route.params;
  const theme = useTheme();

  return (
    <Layout>
      <View
        style={{
          marginTop: theme.spacing.s15,
          marginBottom: theme.spacing.s8,
        }}
      >
        <BackButton />
      </View>

      <Text
        style={{
          marginBottom: theme.spacing.s8,
        }}
        color="text"
        variant="heading3"
      >
        {title}
      </Text>

      <RichText value={body} />
    </Layout>
  );
}
