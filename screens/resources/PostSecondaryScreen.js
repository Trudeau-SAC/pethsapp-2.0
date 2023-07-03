import { useState } from 'react';
import { WebView } from 'react-native-webview';
import Chip from '../../components/Chip';
import ChipRow from '../../components/ChipRow';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const topics = [
  'Applications',
  'University',
  'College',
  'Apprenticeships',
  'Applying Abroad',
];
const filenames = ['apps', 'uni', 'college', 'apprentice', 'outside'];

const PostSecondary = () => {
  const theme = useTheme();
  const [selectedTopic, setSelectedTopic] = useState(0);

  return (
    <>
      {/* Chip Row */}
      <View
        style={{
          padding: theme.spacing.s2,
          backgroundColor: theme.colors.primary,
        }}
      >
        <ChipRow>
          {topics.map((topic, index) => (
            <View key={topic}>
              <Chip
                title={topic}
                selected={index === selectedTopic}
                onPress={() => {
                  setSelectedTopic(index);
                }}
              />
            </View>
          ))}
        </ChipRow>
      </View>

      <WebView
        source={{
          uri: `https://sharp-mcclintock-f1dbd1.netlify.app/resources/uni/${filenames[selectedTopic]}.md`,
        }}
      />
    </>
  );
};

export default PostSecondary;
