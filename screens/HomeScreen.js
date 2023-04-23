import { useEffect, useState } from 'react';
import { client } from '../lib/sanity';
import { shortenedMonths } from '../constants/time';
import { useTheme } from '@react-navigation/native';
import { toPlainText } from '@portabletext/react';
import globalStyles from '../constants/global-styles';
import { StyleSheet, View } from 'react-native';

import CardRow from '../components/CardRow';
import RectangleCard from '../components/RectangleCard';
import Layout from '../components/Layout';
import Text from '../components/Text';
import HomeHeader from '../components/HomeHeader';

const Home = ({ navigation }) => {
  const [announcements, setAnnouncements] = useState([]);
  const theme = useTheme();

  const styles = StyleSheet.create({
    homeHeader: {
      marginTop: theme.spacing.s11,
      marginBottom: theme.spacing.s12,
    },
  });

  useEffect(() => {
    let ignore = false;
    async function fetchAnnouncements() {
      const result = await client.fetch(
        '*[_type == "announcement"] | order(date desc) {_id, date, body}[0...5]'
      ); // Query for the 5 most recent announcements
      if (!ignore) setAnnouncements(result);
    }
    fetchAnnouncements();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Layout>
      <View style={styles.homeHeader}>
        <HomeHeader />
      </View>

      <View style={globalStyles.sectionList}>
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

        <View style={globalStyles.section}>
          <Text color="text" variant="heading5">
            Events
          </Text>
        </View>

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
