import { useEffect, useState } from 'react';
import { getAnnouncements } from '../lib/sanity';
import { shortenedMonths } from '../constants/time';
import { useTheme } from '@react-navigation/native';
import { toPlainText } from '@portabletext/react';
import globalStyles from '../constants/global-styles';

import CardRow from '../components/CardRow';
import RectangleCard from '../components/RectangleCard';
import Layout from '../components/Layout';
import Text from '../components/Text';
import HomeHeader from '../components/HomeHeader';
import { StyleSheet, View } from 'react-native';

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
      const result = await getAnnouncements();
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
            let body = toPlainText(announcement.body); // Convert portable text to plain text
            body = body.replace(/\n|\r/g, ' '); // Remove newlines
            body = body.substring(0, 100); // Shorten for preview

            return (
              <RectangleCard
                key={announcement._id}
                title={date}
                subtitle={body}
                navigateTo="Rich Text Screen"
                navigationParams={{ title: date, content: announcement.body }}
              />
            );
          })}
        </CardRow>
      </View>
    </Layout>
  );
};

export default Home;
