import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { fonts } from '../../constants/themes';
import * as Linking from 'expo-linking';

import Layout from '../../components/Layout';
import Text from '../../components/Text';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import { Image } from 'expo-image';

const TechTeam = () => {
  const theme = useTheme();

  return (
    <Layout>
      <View
        style={{
          flex: 1,
        }}
      >
        {/* Back button */}
        <View
          style={{
            marginTop: theme.spacing.s15,
            marginBottom: theme.spacing.s9,
          }}
        >
          <BackButton />
        </View>

        {/* Title */}
        <Text
          style={{
            marginBottom: theme.spacing.s8,
          }}
          variant="heading2"
          color="text"
        >
          Tech Team
        </Text>

        <Text
          color="text"
          variant="heading7"
          style={{ fontFamily: fonts.regular }}
        >
          Planning an activity that needs technology? Fill out this form and the
          Tech Team will get back to you!
        </Text>

        <View
          style={{
            padding: theme.spacing.s12,
            flex: 1,
          }}
        >
          <Image
            style={{ width: '100%', height: '100%' }}
            source={require('../../assets/images/computer.png')}
            contentFit="contain"
          />
        </View>

        <Button
          title="Tech Team Form"
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/forms/d/e/1FAIpQLScIrCRQrYJBQwXtfRiDTVb7qfUxpo_19CketcqJszuM11UJsw/viewform'
            )
          }
        />
      </View>
    </Layout>
  );
};

export default TechTeam;
