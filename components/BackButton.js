import { useTheme } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ onPress }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={{
        width: theme.spacing.s12,
        height: theme.spacing.s12,
        borderRadius: '50%',
        backgroundColor: theme.colors.background,
        padding: 8,
        borderColor: theme.colors.border,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Feather
        name="arrow-left"
        size={theme.spacing.s6}
        color={theme.colors.border}
      />
    </TouchableHighlight>
  );
};

export default BackButton;
