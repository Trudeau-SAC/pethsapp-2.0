import Layout from '../components/Layout';
import HomeHeader from '../components/HomeHeader';
import { useEffect, useState } from 'react';
import RectangleCard from '../components/RectangleCard';

const SANITY_PROJECT_ID = '8if5onrn';
const SANITY_DATASET = 'production';
const QUERY = encodeURIComponent('*[_type == "announcement"]');
const URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2023-04-20/data/query/${SANITY_DATASET}?query=${QUERY}`;

const Home = ({ navigation }) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        if (!ignore) {
          setAnnouncements(result);
        }
      })
      .catch((err) => console.error(err));

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
