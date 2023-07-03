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
  const [studyResourceGroupsParam, setStudyResourceGroupsParam] = useState({
    topic: topics[selectedTopic],
  });
  const studyResourceGroups = useSanityData(
    '*[_type == "studyResourceGroup" && topic == $topic]',
    studyResourceGroupsParam
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
          marginBottom: theme.spacing.s7,
        }}
        variant="heading3"
        color="text"
      >
        Study Resources
      </Text>

      {/* Chip Row */}
      <View style={{ marginBottom: theme.spacing.s10 }}>
        <ChipRow>
          {topics.map((topic, index) => (
            <View key={topic}>
              <Chip
                title={topic}
                selected={index === selectedTopic}
                onPress={() => {
                  setSelectedTopic(index);
                  setStudyResourceGroupsParam({ topic: topics[index] });
                }}
              />
            </View>
          ))}
        </ChipRow>
      </View>

      {/* Study Resources */}
      <View style={{ rowGap: theme.spacing.s4 }}>
        {studyResourceGroups === null ? (
          <Text>Loading...</Text>
        ) : (
          studyResourceGroups.map((studyResourceGroup) =>
            studyResourceGroup.studyResources.map((studyResource) => (
              <Text key={studyResource._id} variant="body" color="text">
                {studyResource.name}
              </Text>
            ))
          )
        )}
      </View>
    </Layout>
  );
};

export default StudyResources;
