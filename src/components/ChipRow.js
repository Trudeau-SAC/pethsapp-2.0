import { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import Chip from './Chip';

export default function ChipRow({ titles }) {
  const [selected, setSelected] = useState(titles[0]);
  const theme = useTheme();

  return (
    <ScrollView style={{ overflow: 'visible' }} horizontal>
      {titles.map((title) => (
        <View style={{ marginRight: theme.spacing.s3 }}>
          <Chip
            key={title}
            title={title}
            selected={title == selected}
            onPress={setSelected}
          />
        </View>
      ))}
    </ScrollView>
  );
}
