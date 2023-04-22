import Layout from '../components/Layout';
import HomeHeader from '../components/HomeHeader';
import { useEffect, useState } from 'react';
import RectangleCard from '../components/RectangleCard';
import { getAnnouncements } from '../lib/sanity';

const Home = ({ navigation }) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchAnnouncements() {
      try {
        const result = await getAnnouncements();
        if (!ignore) setAnnouncements(result);
      } catch (error) {
        throw error;
      }
    }

    fetchAnnouncements();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Layout>
      <HomeHeader />
      {announcements.map((announcement) => {
        return (
          <RectangleCard key={announcement?.date} title={announcement?.date} />
        );
      })}
    </Layout>
  );
};

export default Home;
