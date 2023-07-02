import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { useState } from 'react';
import { useSanityData } from '../../lib/sanity';
import Layout from '../../components/Layout';
import Text from '../../components/Text';
import BackButton from '../../components/BackButton';
import SearchBar from '../../components/SearchBar';
import ChipRow from '../../components/ChipRow';
import Chip from '../../components/Chip';

const ClubsList = () => {
  const theme = useTheme();
  const clubs = useSanityData('*[_type == "club"] | order(year desc, name)');
  const [selectedYear, setSelectedYear] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  if (clubs === null) {
    return <Text>Loading...</Text>;
  }

  if (selectedYear >= clubs.length) {
    setSelectedYear(clubs.length - 1);
    return null;
  }

  // Get all years
  const yearArray = clubs.map((club) => club.year);
  const yearSet = new Set(yearArray);
  const uniqueYears = Array.from(yearSet);

  const filteredClubs = clubs.filter(
    (club) =>
      club.year === uniqueYears[selectedYear] &&
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
          {uniqueYears.map((year, index) => (
            <View key={year}>
              <Chip
                title={year}
                selected={index === selectedYear}
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
