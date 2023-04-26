import { useEffect, useState } from 'react';
import { client } from '../lib/sanity';
import { shortenedMonths } from '../constants/time';
import { useTheme } from '@react-navigation/native';
import { toPlainText } from '@portabletext/react';
import globalStyles from '../constants/global-styles';
import { View } from 'react-native';
import { builder } from '../lib/sanity';

import CardRow from '../components/CardRow';
import RectangleCard from '../components/RectangleCard';
import Layout from '../components/Layout';
import Text from '../components/Text';
import HomeHeader from '../components/HomeHeader';

const Home = ({ navigation }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    let ignore = false;

    /**
     * Fetches the 5 most recent announcements from Sanity
     */
    async function fetchAnnouncements() {
      const result = await client.fetch(
        '*[_type == "announcement"] | order(date desc) {_id, date, body}[0...5]'
      );
      if (!ignore) setAnnouncements(result);
    }
    fetchAnnouncements();

    /**
     * Fetches current and upcoming events from Sanity
     */
    async function fetchEvents() {
      const today = new Date(Date.now()).toLocaleDateString('en-CA');
      const result = await client.fetch(
        '*[_type == "event" && end_date >= $today] | order(date asc) {_id, name, card_image}',
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

  return (
    <Layout>
      {/* Header */}
      <View
        style={{
          marginTop: theme.spacing.s11,
          marginBottom: theme.spacing.s12,
        }}
      >
        <HomeHeader />
      </View>

      <View style={globalStyles.sectionList}>
        {/* Announcements section */}
        <View style={globalStyles.section}>
          <Text color="text" variant="heading5">
            Announcements
          </Text>
          <CardRow>
            {announcements.map((announcement) => {
              const d = new Date(Date.parse(announcement.date));
              const month = shortenedMonths[d.getMonth()];
              const day = d.getDate();
              const date = `${month} ${day}`;
              let previewBody = toPlainText(announcement.body); // Convert portable text to plain text
              previewBody = previewBody.replace(/\n|\r/g, ' '); // Remove newlines
              previewBody = previewBody.substring(0, 100); // Shorten for preview

              return (
                <RectangleCard
                  key={announcement._id}
                  title={date}
                  subtitle={previewBody}
                  navigateTo="Announcement"
                  navigationParams={{ title: date, body: announcement.body }}
                />
              );
            })}
          </CardRow>
        </View>

        {/* Events section */}
        <View style={globalStyles.section}>
          <Text color="text" variant="heading5">
            Events
          </Text>
          <CardRow>
            {events.map((event) => (
              <RectangleCard
                key={event._id}
                title={event.name}
                imageSource={
                  event.card_image && builder.image(event.card_image).url()
                }
                navigateTo="Event"
                navigationParams={{ title: event.name, id: event._id }}
              />
            ))}
          </CardRow>
        </View>

        {/* More section */}
        <View style={globalStyles.section}>
          <Text color="text" variant="heading5">
            More
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default Home;
