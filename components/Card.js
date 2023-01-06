import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Card = (props) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      width: 240,
      height: 160,
    },
  });

  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  );
};

export default Card;
