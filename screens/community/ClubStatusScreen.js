import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { fonts } from '../../constants/themes';
import * as Linking from 'expo-linking';

import Layout from '../../components/Layout';
import Text from '../../components/Text';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import { Image } from 'expo-image';

const ClubStatus = () => {
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
          Clubs List
        </Text>

        <Text
          color="text"
          variant="heading7"
          style={{ fontFamily: fonts.regular }}
        >
          Have an idea for a club and want to get started? {'\n\n'} Fill out the
          club status form!
        </Text>

        <View
          style={{
            padding: theme.spacing.s7,
            flex: 1,
          }}
        >
          <Image
            style={{ width: '100%', height: '100%' }}
            source={require('../../assets/images/rocket.png')}
            contentFit="contain"
          />
        </View>

        <Button
          title="Club Status Form"
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/document/d/1pZa37xuwaybow-2D7MNpaCUq4IPVLgYm146Upr2543U/edit?usp=sharing'
            )
          }
        />
      </View>
    </Layout>
  );
};

export default ClubStatus;
