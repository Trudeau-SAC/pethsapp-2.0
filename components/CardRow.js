import { ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import RectangleCard from './RectangleCard';

/**
 * A horizontal scroll view containing multiple cards
 * @param {object} data List of objects that contain data for each card
 */
export default function CardRow({ data }) {
  const theme = useTheme();

  const cards = data.map((item, index) => (
    <View
      key={index}
      style={{ marginRight: index == data.length - 1 ? 0 : theme.spacing.s6 }}
    >
      <RectangleCard {...item} />
    </View>
  ));

  return (
    <ScrollView style={{ overflow: 'visible', flexGrow: 0 }} horizontal>
      {cards}
    </ScrollView>
  );
}
