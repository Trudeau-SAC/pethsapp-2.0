import { useTheme } from '@react-navigation/native';
import { StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

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
      <Feather name="maximize-2" size={20} color={theme.colors.primary} />
    </TouchableHighlight>
  );
};

export default ExpandButton;
