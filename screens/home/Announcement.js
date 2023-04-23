import { View } from 'react-native';
import globalStyles from '../../constants/global-styles';

import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';
import Text from '../../components/Text';
import RichText from '../../components/RichText';

export default function RichTextScreen({ route }) {
  const { title, body } = route.params;

  return (
    <Layout>
      <View style={globalStyles.backButton}>
        <BackButton />
      </View>

      <Text style={globalStyles.screenHeading3} color="text" variant="heading3">
        {title}
      </Text>

      <RichText value={body} />
    </Layout>
  );
}
