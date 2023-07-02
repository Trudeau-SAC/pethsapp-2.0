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
  const [selectedYear, setSelectedYear] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let ignore = false;

    /**
     * Fetch years
     */
    async function fetchYears() {
      const result = await client.fetch(
        `*[_type == "club"] | order(year desc) {year}`
      );
      if (!ignore) {
        setSelectedYear(0);
      }
    }

    /**
     * Fetch clubs from a specific year
     */
    async function fetchClubs(year) {
      const result = await client.fetch(
        `*[_type == "club" && year == ${year}] | order(year desc, name)`
      );
      if (!ignore) {
        setClubs(result);
      }
    }

    return () => {
      ignore = true;
    };
  }, []);

  // Filter clubs by year and search query
  const filteredClubs = clubs.filter(
    (club) =>
      club.year === years[selectedYear] &&
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
                selected={year === years[selectedYear]}
                onPress={() => setSelectedYear(index)}
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
