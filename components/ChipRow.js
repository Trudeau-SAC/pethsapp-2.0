import { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import Chip from './Chip';

export default function ChipRow({ titles }) {
  const [selected, setSelected] = useState(titles[0]);
  const theme = useTheme();

  return (
    <ScrollView style={{ overflow: 'visible' }} horizontal>
      {titles.map((title) => (
        <Chip
          title={title}
          selected={title == selected}
          onPress={setSelected}
          style={{ marginRight: theme.spacing.s5 }}
        />
      ))}
    </ScrollView>
  );
}
