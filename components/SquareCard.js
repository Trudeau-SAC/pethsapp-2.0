import { View, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Text from './Text';

/**
 * Card component, which displays text and images
 * @param {string} title The main title of the card
 * @param {string} navigateTo The name of the screen to navigate to when the card is pressed
 * @param {component} icon Icon component to display on top right of card
 * @returns
 */
const SquareCard = ({ title, navigateTo, navigationParams, icon }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 24,
      display: 'block',
      width: 160,
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
    icon: {
      position: 'absolute',
      top: theme.spacing.s4,
      right: theme.spacing.s4,
    },
  });

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(navigateTo)}
      underlayColor={theme.colors.onPrimary}
    >
      <LinearGradient
        style={styles.background}
        colors={[theme.colors.card + 'CC', theme.colors.card + '00']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      />
      <View style={styles.icon}>{icon}</View>
      <View style={styles.textContainer}>
        {title && (
          <Text color="onPrimary" variant="cardTitle">
            {title}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default SquareCard;
