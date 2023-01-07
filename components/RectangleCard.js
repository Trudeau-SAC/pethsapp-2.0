import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const RectangleCard = (props) => {
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
      color: theme.colors.onPrimary,
      marginTop: theme.spacing.s1,
    },
    title: {
      fontFamily: theme.fonts.semibold,
      fontWeight: theme.textVariants.heading6.fontWeight,
      fontSize: theme.textVariants.heading6.fontSize,
    },
    subtitle: {
      fontFamily: theme.fonts.regular,
      fontWeight: theme.textVariants.body2.fontWeight,
      fontSize: theme.textVariants.body2.fontSize,
    },
    graphic: {
      resizeMode: 'contain',
      height: '100%',
      width: 144,
      position: 'absolute',
      right: 0,
    },
    icon: {
      resizeMode: 'contain',
      width: '100%',
      height: '100%',
    },
    button: {
      position: 'absolute',
      width: 36,
      height: 36,
      right: theme.spacing.s4,
      top: theme.spacing.s4,
      borderRadius: '50%',
      backgroundColor: theme.colors.onPrimary,
      padding: 8,
    },
  });

  return (
    <View
      style={styles.container}
      onPress={() => navigation.navigate(props.navigateTo)}
      underlayColor={theme.colors.onPrimary}
    >
      {props.imageSource && (
        <Image source={props.imageSource} style={styles.graphic} />
      )}
      <LinearGradient
        style={styles.background}
        colors={[theme.colors.card + 'CC', theme.colors.card + '00']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      />
      <View style={styles.textContainer}>
        {props.supertitle && (
          <Text style={{ ...styles.subtitle, ...styles.text }}>
            {props.supertitle}
          </Text>
        )}
        {props.title && (
          <Text style={{ ...styles.title, ...styles.text }}>{props.title}</Text>
        )}
        {props.subtitle && (
          <Text style={{ ...styles.subtitle, ...styles.text }}>
            {props.subtitle}
          </Text>
        )}
      </View>
      <TouchableHighlight
        style={styles.button}
        underlayColor={theme.colors.neutral2}
        onPress={() =>
          navigation.navigate(props.navigateTo, props.navigationParams)
        }
      >
        <Image
          style={styles.icon}
          source={require('../assets/icons/maximize-icon.png')}
        />
      </TouchableHighlight>
    </View>
  );
};

export default RectangleCard;
