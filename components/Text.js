import { Text as RNText } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Text = ({ style, variant, color, ...rest }) => {
  const theme = useTheme();

  return (
    <RNText
      style={{
        color: theme.colors[color],
        ...theme.textVariants[variant],
        ...style,
      }}
      {...rest}
    />
  );
};

export default Text;
