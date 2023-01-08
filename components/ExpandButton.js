import { useTheme } from '@react-navigation/native';
import { StyleSheet, TouchableHighlight, Image } from 'react-native';

const ExpandButton = ({ onPress }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
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
    <TouchableHighlight
      style={styles.button}
      underlayColor={theme.colors.neutral2}
      onPress={onPress}
    >
      <Image
        style={styles.icon}
        source={require('../assets/icons/maximize-icon.png')}
      />
    </TouchableHighlight>
  );
};

export default ExpandButton;
