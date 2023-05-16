import { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import Chip from './Chip';

export default function ChipRow({ titles, selected, onPress }) {
  const theme = useTheme();

  return (
    <ScrollView style={{ overflow: 'visible' }} horizontal>
      {titles.map((title, index) => (
        <View
          key={title}
          style={{
            marginRight: index === titles.length - 1 ? 0 : theme.spacing.s3,
          }}
        >
          <Chip title={title} selected={title === selected} onPress={onPress} />
        </View>
      ))}
    </ScrollView>
  );
}
