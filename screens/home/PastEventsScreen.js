import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { client, imageBuilder } from '../../lib/sanity';
import { useEffect, useState } from 'react';

import CardRow from '../../components/CardRow';
import RectangleCard from '../../components/RectangleCard';
import Layout from '../../components/Layout';
import Text from '../../components/Text';
import BackButton from '../../components/BackButton';

const PastEventsScreen = () => {
  const [events, setEvents] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    let ignore = false;

    /**
     * Fetches past events from Sanity
     */
    async function fetchEvents() {
      const today = new Date().toISOString().substring(0, 10);
      const result = await client.fetch(
        '*[_type == "event" && end_date < $today] | order(start_date desc) {_id, name, card_image, start_date, "asset": card_image.asset->{metadata{blurHash}}}',
        { today: today }
      );

      if (!ignore) setEvents(result);
    }
    fetchEvents();

    // Cleanup function
    return () => {
      ignore = true;
    };
  }, []);

  // Group events by school year
  const eventsMap = new Map();
  events.forEach((event) => {
    // Get school year of event
    const startDate = new Date(event.start_date);
    let schoolYear = 'Other';
    if (startDate.getMonth() >= 8) {
      schoolYear = `${startDate.getFullYear()}-${startDate.getFullYear() + 1}`;
    } else {
      schoolYear = `${startDate.getFullYear() - 1}-${startDate.getFullYear()}`;
    }

    // Add event to map
    if (eventsMap.has(schoolYear)) {
      eventsMap.get(schoolYear).push(event);
    } else {
      eventsMap.set(schoolYear, [event]);
    }
  });

  // Create ui for each school year
  let groupedEvents = [];
  eventsMap.forEach((events, schoolYear) =>
    groupedEvents.push(
      <View
        style={{
          rowGap: theme.spacing.s4,
        }}
        key={schoolYear}
      >
        <Text color="text" variant="heading5">
          {schoolYear}
        </Text>
        <CardRow>
          {events.map((event) => (
            <RectangleCard
              key={event._id}
              title={event.name}
              imageSource={
                event.card_image && imageBuilder.image(event.card_image).url()
              }
              navigateTo="Event"
              navigationParams={{ title: event.name, id: event._id }}
            />
          ))}
        </CardRow>
      </View>
    )
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
        Past Events
      </Text>

      <View
        style={{
          rowGap: theme.spacing.s12,
        }}
      >
        {groupedEvents}
      </View>
    </Layout>
  );
};

export default PastEventsScreen;
