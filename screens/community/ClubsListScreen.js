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
import Expander from '../../components/Expander';
import { fonts } from '../../constants/themes';
import RichText from '../../components/RichText';

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
        filteredClubs.map((club) => {
          const emailRichText = [
            {
              _type: 'block',
              children: [
                {
                  _type: 'span',
                  marks: ['link'],
                  text: club.email,
                },
              ],
              markDefs: [
                {
                  _key: 'link',
                  _type: 'link',
                  href: `mailto:${club.email}`,
                },
              ],
              style: 'normal',
            },
          ];

          return (
            <Expander key={club._id} title={club.name}>
              <View style={{ gap: theme.spacing.s3 }}>
                <View>
                  <Text
                    variant="body"
                    color="text"
                    style={{ fontFamily: fonts.bold }}
                  >
                    Description
                  </Text>
                  <Text variant="body" color="text">
                    {club.description}
                  </Text>
                </View>

                <View>
                  <Text
                    variant="body"
                    color="text"
                    style={{ fontFamily: fonts.bold }}
                  >
                    Email
                  </Text>
                  <RichText value={emailRichText} />
                </View>

                <View>
                  <Text
                    variant="body"
                    color="text"
                    style={{ fontFamily: fonts.bold }}
                  >
                    Teacher Advisors
                  </Text>
                  {club.teacher_advisors.map((teacherAdvisor) => (
                    <Text key={teacherAdvisor} variant="body" color="text">
                      {teacherAdvisor}
                    </Text>
                  ))}
                </View>

                <View>
                  <Text
                    variant="body"
                    color="text"
                    style={{ fontFamily: fonts.bold }}
                  >
                    Club Leaders
                  </Text>
                  {club.club_leaders.map((clubLeader) => (
                    <Text key={clubLeader} variant="body" color="text">
                      {clubLeader}
                    </Text>
                  ))}
                </View>

                <View>
                  <Text
                    variant="body"
                    color="text"
                    style={{ fontFamily: fonts.bold }}
                  >
                    Meeting Date
                  </Text>
                  <Text variant="body" color="text">
                    {club.meeting_date}
                  </Text>
                </View>
              </View>
            </Expander>
          );
        })
      )}
    </Layout>
  );
};

export default ClubsList;
