import Text from './Text';
import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { months, weekdays } from '../constants/time';

export default function HomeHeader() {
  const theme = useTheme();
  const date = new Date();

  return (
    <View>
      <Text
        variant="logo"
        color="logo"
        style={{
          marginBottom: theme.spacing.s4,
        }}
      >
        pethsapp.
      </Text>
      <Text
        variant="heading5"
        color="text"
        style={{ marginBottom: theme.spacing.s3 }}
      >
        {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
      </Text>
      <Text variant="heading1" color="text">
        {weekdays[date.getDay()]}
      </Text>
    </View>
  );
}
