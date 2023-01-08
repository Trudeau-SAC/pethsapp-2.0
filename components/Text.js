import { Text as RNText } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Text = ({ style, variant, color, ...rest }) => {
  const theme = useTheme();

  const textVariant = theme.textVariants[variant];

  return (
    <RNText
      style={{
        color: theme.colors[color],
        ...textVariant,
        ...style,
      }}
      {...rest}
    />
  );
};

export default Text;
