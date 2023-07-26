import { shortenedMonths } from '../constants/time';
import { useTheme } from '@react-navigation/native';
import { toPlainText } from '@portabletext/react';
import { StyleSheet, View } from 'react-native';
import { imageBuilder } from '../lib/sanity';
import { MaterialIcons } from '@expo/vector-icons';
import { useSanityData } from '../lib/sanity';
import CardRow from '../components/CardRow';
import RectangleCard from '../components/RectangleCard';
import Layout from '../components/Layout';
import Text from '../components/Text';
import HomeHeader from '../components/HomeHeader';
import SquareCard from '../components/SquareCard';
import { useState } from 'react';

const Home = () => {
  const announcements = useSanityData(
    '*[_type == "announcement"] | order(date desc) {_id, date, body}[0...5]',
    undefined,
    false
  );
  const today = new Date().toISOString().substring(0, 10);
  const [eventsParam] = useState({ today: today });
  const events = useSanityData(
    '*[_type == "event" && end_date >= $today] | order(date asc) {_id, name, card_image}',
    eventsParam,
    false
  );
  const theme = useTheme();

  const styles = StyleSheet.create({
    row: {
      // For some reason, the Android overscroll stretching causes overflow to be cut off. Therefore, ignore padding.
      marginHorizontal: -theme.spacing.s5,
    },
  });

  return (
    <Layout hasTabBar={true}>
      {/* Header */}
      <View
        style={{
          marginTop: theme.spacing.s11,
          marginBottom: theme.spacing.s12,
        }}
      >
        <HomeHeader />
      </View>

      <View style={{ rowGap: theme.spacing.s12 }}>
        {/* Announcements section */}
        <View
          style={{
            rowGap: theme.spacing.s4,
          }}
        >
          <Text color="text" variant="heading5">
            Announcements
          </Text>
          <View style={styles.row}>
            <CardRow>
              {announcements === null ? (
                <Text>Loading...</Text>
              ) : (
                announcements.map((announcement) => {
                  const d = new Date(announcement.date);
                  const month = shortenedMonths[d.getMonth()];
                  const day = d.getUTCDate();
                  const date = `${month} ${day}`;
                  let previewBody = toPlainText(announcement.body); // Convert portable text to plain text
                  previewBody = previewBody.replace(/\n|\r/g, ' '); // Remove newlines
                  previewBody = previewBody.substring(0, 60); // Shorten for preview

                  return (
                    <RectangleCard
                      key={announcement._id}
                      title={date}
                      subtitle={previewBody}
                      navigateTo="Announcement"
                      navigationParams={{
                        title: date,
                        body: announcement.body,
                      }}
                    />
                  );
                })
              )}
            </CardRow>
          </View>
        </View>

        {/* Events section */}
        <View
          style={{
            rowGap: theme.spacing.s4,
          }}
        >
          <Text color="text" variant="heading5">
            Events
          </Text>
          <View style={styles.row}>
            <CardRow>
              {events === null ? (
                <Text>Loading...</Text>
              ) : (
                events.map((event) => (
                  <RectangleCard
                    key={event._id}
                    title={event.name}
                    imageSource={
                      event.card_image &&
                      imageBuilder.image(event.card_image).url()
                    }
                    navigateTo="Event"
                    navigationParams={{ title: event.name, id: event._id }}
                  />
                ))
              )}
            </CardRow>
          </View>
        </View>

        {/* More section */}
        <View
          style={{
            rowGap: theme.spacing.s4,
          }}
        >
          <Text color="text" variant="heading5">
            More
          </Text>
          <SquareCard
            title="Past Events"
            icon={
              <MaterialIcons
                name="directions-run"
                size={44}
                color={theme.colors.onPrimary}
              />
            }
            navigateTo="Past Events"
          />
        </View>
      </View>
    </Layout>
  );
};

export default Home;
