import Text from './Text';
import { useTheme } from '@react-navigation/native';

export default function HomeHeader() {
  const theme = useTheme();
  const date = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <>
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
    </>
  );
}
