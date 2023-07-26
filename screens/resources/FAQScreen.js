import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import Layout from '../../components/Layout';
import Text from '../../components/Text';
import BackButton from '../../components/BackButton';
import ChipRow from '../../components/ChipRow';
import Chip from '../../components/Chip';
import { useSanityData } from '../../lib/sanity';
import { useState } from 'react';
import Expander from '../../components/Expander';
import RichText from '../../components/RichText';

const topics = ['General', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

const FAQ = () => {
  const theme = useTheme();
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [sanityParam, setSanityParam] = useState({
    topic: topics[selectedTopic],
  });
  const faqGroups = useSanityData(
    '*[_type == "faqGroup" && topic == $topic]',
    sanityParam
  );

  let faqElements;
  if (faqGroups === null) {
    faqElements = <Text>Loading...</Text>;
  } else if (faqGroups.length === 0) {
    faqElements = null;
  } else {
    faqElements = faqGroups[0].faqs.map((faq) => (
      <Expander key={faq._key} title={faq.question}>
        <Text variant="body" color="text">
          <RichText value={faq.answer} />
        </Text>
      </Expander>
    ));
  }

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
        FAQ
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
                  setSanityParam({ topic: topics[index] });
                }}
              />
            </View>
          ))}
        </ChipRow>
      </View>

      {/* FAQs */}
      <View style={{ rowGap: theme.spacing.s4 }}>{faqElements}</View>
    </Layout>
  );
};

export default FAQ;
