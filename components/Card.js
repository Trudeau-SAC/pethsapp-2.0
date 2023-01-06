import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../Theme';
import { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Card = (props) => {
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 24,
      width: 240,
      height: 160,
    },
    background: {
      width: '100%',
      height: '100%',
    },
  });

  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.primary + 'CC', theme.colors.primary + '00']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <Text>{props.title}</Text>
    </LinearGradient>
  );
};

export default Card;
