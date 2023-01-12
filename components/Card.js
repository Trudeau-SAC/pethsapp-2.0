import { View, StyleSheet, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import ExpandButton from './ExpandButton';
import Text from './Text';

/**
 * Card component, which displays text and images
 * @param {string} shape The shape of the card, either 'rectangle' or 'square'
 * @param {string} title The main title of the card
 * @param {string} subtitle The subtitle of the card
 * @param {string} supertitle Like the subtitle, but above the title
 * @param {string} navigateTo The name of the screen to navigate to when the card is pressed
 * @param {object} navigationParams The params to pass to the screen when navigating
 * @param {string} imageSource The source of the image to display on the card
 * @param {string} icon The name of the icon to display on the card
 * @returns
 */
const Card = ({
  shape,
  title,
  subtitle,
  supertitle,
  navigateTo,
  navigationParams,
  imageSource,
}) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 24,
      display: 'block',
      width: 240,
      height: 160,
      overflow: 'hidden',
    },
    background: {
      width: '100%',
      height: '100%',
    },
    textContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      position: 'absolute',
      width: 200,
      height: 112,
      bottom: theme.spacing.s6,
      left: theme.spacing.s5,
    },
    text: {
      marginTop: theme.spacing.s1,
    },
    graphic: {
      resizeMode: 'contain',
      height: '100%',
      width: 144,
      position: 'absolute',
      right: 0,
    },
  });

  return (
    <View
      style={styles.container}
      onPress={() => navigation.navigate(navigateTo)}
      underlayColor={theme.colors.onPrimary}
    >
      {imageSource && <Image source={imageSource} style={styles.graphic} />}
      <LinearGradient
        style={styles.background}
        colors={[theme.colors.card + 'CC', theme.colors.card + '00']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      />
      <View style={styles.textContainer}>
        {supertitle && (
          <Text color="onPrimary" variant="body2" style={styles.text}>
            {supertitle}
          </Text>
        )}
        {title && (
          <Text color="onPrimary" variant="cardTitle">
            {title}
          </Text>
        )}
        {subtitle && (
          <Text color="onPrimary" variant="body2" style={styles.text}>
            {subtitle}
          </Text>
        )}
      </View>
      <ExpandButton
        onPress={() => navigation.navigate(navigateTo, navigationParams)}
      />
    </View>
  );
};

export default Card;
