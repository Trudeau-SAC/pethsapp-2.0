import { View, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import Text from './Text';
import { useState } from 'react';

/**
 * Card component, which displays text and images
 * @param {string} title The main title of the card
 * @param {string} subtitle The subtitle of the card
 * @param {string} supertitle Like the subtitle, but above the title
 * @param {string} navigateTo The name of the screen to navigate to when the card is pressed
 * @param {object} navigationParams The params to pass to the screen when navigating
 * @param {string} imageSource The source of the image to display on the card. Must be same size as card
 * @returns
 */
const RectangleCard = ({
  title,
  subtitle,
  supertitle,
  navigateTo,
  navigationParams,
  imageSource,
}) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [isPressedIn, setIsPressedIn] = useState(false);

  const styles = StyleSheet.create({
    container: {
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 24,
      width: 240,
      height: 160,
      overflow: 'hidden',
    },
    background: {
      position: 'absolute',
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
    image: {
      height: '100%',
      width: '100%',
    },
    expandButton: {
      position: 'absolute',
      right: theme.spacing.s4,
      top: theme.spacing.s4,
    },
    tint: {
      backgroundColor: `rgba(0, 0, 0, ${isPressedIn ? 0.2 : 0})`,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  });

  return (
    <Pressable
      style={styles.container}
      onPressIn={() => setIsPressedIn(true)}
      onPressOut={() => setIsPressedIn(false)}
      onPress={() => {
        if (navigateTo) navigation.navigate(navigateTo, navigationParams);
      }}
      unstable_pressDelay={100}
      underlayColor={theme.colors.onPrimary}
    >
      {imageSource && <Image style={styles.image} source={imageSource} />}
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
      <View style={styles.tint} />
    </Pressable>
  );
};

export default RectangleCard;
