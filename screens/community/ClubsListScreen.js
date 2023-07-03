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

const years = ['2023-2024', '2022-2023'];

const ClubsList = () => {
  const theme = useTheme();
  const [selectedYear, setSelectedYear] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [clubsParam, setClubsParam] = useState({ year: years[selectedYear] });
  const clubs = useSanityData(
    '*[_type == "club" && year == $year] | order(year desc, name)',
    clubsParam
  );

  let filteredClubs = null;
  if (clubs !== null) {
    filteredClubs = clubs.filter((club) =>
      club.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

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
                selected={index === selectedYear}
                onPress={() => {
                  setSelectedYear(index);
                  setClubsParam({ year: years[index] });
                }}
              />
            </View>
          ))}
        </ChipRow>
      </View>

      {/* Clubs */}
      {filteredClubs === null ? (
        <Text>Loading...</Text>
      ) : (
        filteredClubs.map((club) => (
          <Text key={club._id} variant="body" color="text">
            {club.name}
          </Text>
        ))
      )}
    </Layout>
  );
};

export default ClubsList;
