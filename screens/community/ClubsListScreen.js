import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { client } from '../../lib/sanity';

import Layout from '../../components/Layout';
import Text from '../../components/Text';
import BackButton from '../../components/BackButton';
import SearchBar from '../../components/SearchBar';
import ChipRow from '../../components/ChipRow';
import Chip from '../../components/Chip';

const ClubsList = () => {
  const theme = useTheme();
  const [clubs, setClubs] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch clubs from Sanity
  useEffect(() => {
    let ignore = false;

    /**
     * Fetches clubs from Sanity
     */
    async function fetchClubs() {
      try {
        const result = await client.fetch(
          '*[_type == "club"] | order(year desc, name)'
        );

        if (!ignore) {
          setClubs(result);

          // Get all years
          let yearSet = new Set();
          for (let i = 0; i < result.length; i++) {
            yearSet.add(result[i].year);
          }
          const yearArray = Array.from(yearSet);
          setYears(yearArray);
          setSelectedYear(yearArray[0]);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchClubs();

    // Cleanup function
    return () => {
      ignore = true;
    };
  }, []);

  const filteredClubs = clubs.filter(
    (club) =>
      club.year === selectedYear &&
      club.name.toLowerCase().includes(searchQuery.toLowerCase())
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
        Clubs List
      </Text>

      {/* Search bar */}
      <View style={{ marginBottom: theme.spacing.s7 }}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search for clubs..."
        />
      </View>

      {/* Chip Row */}
      <View style={{ marginBottom: theme.spacing.s9 }}>
        <ChipRow>
          {years.map((year, index) => (
            <View key={year}>
              <Chip
                title={year}
                selected={year === selectedYear}
                onPress={setSelectedYear}
              />
            </View>
          ))}
        </ChipRow>
      </View>

      {/* Clubs */}
      {filteredClubs.map((club) => (
        <Text key={club.name} variant="body" color="text">
          {club.name}
        </Text>
      ))}
    </Layout>
  );
};

export default ClubsList;
