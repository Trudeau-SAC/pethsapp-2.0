import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import Layout from '../../components/Layout';
import Text from '../../components/Text';
import BackButton from '../../components/BackButton';
import ChipRow from '../../components/ChipRow';
import Chip from '../../components/Chip';
import { useSanityData } from '../../lib/sanity';
import { useState } from 'react';

const topics = ['Math', 'Biology', 'Physics', 'Chemistry', 'French', 'English'];

const StudyResources = () => {
  const theme = useTheme();
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [studyResourceGroupParam, setStudyResourceGroupParam] = useState({
    topic: topics[selectedTopic],
  });
  const studyResourceGroup = useSanityData(
    '*[_type == "studyResourceGroup && topic == $topic"]',
    studyResourceGroupParam
  );

  return (
    <Layout>
      {/* Back button */}
      <View
        style={{
          marginTop: theme.spacing.s15,
          marginBottom: theme.spacing.s9,
        }}
      >
        <BackButton />
      </View>

      {/* Title */}
      <Text
        style={{
          marginBottom: theme.spacing.s8,
        }}
        variant="heading2"
        color="text"
      >
        Study Resources
      </Text>
    </Layout>
  );
};

export default StudyResources;
