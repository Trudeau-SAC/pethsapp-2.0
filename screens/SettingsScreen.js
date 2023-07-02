import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import {
  useAnnouncementsAndEvents,
  useSnowDay,
  useDarkMode,
} from '../contexts/SettingsContext';

import Layout from '../components/Layout';
import Text from '../components/Text';
import Setting from '../components/Setting';

const Settings = () => {
  const theme = useTheme();
  const { announcementsAndEvents, updateAnnouncementsAndEvents } =
    useAnnouncementsAndEvents();
  const { snowDay, updateSnowDay } = useSnowDay();
  const { darkMode, updateDarkMode } = useDarkMode();

  return (
    <Layout hasTabBar={true}>
      <Text
        style={{
          marginTop: theme.spacing.s15,
          marginBottom: theme.spacing.s8,
        }}
        variant="heading2"
        color="text"
      >
        Settings
      </Text>

      <View style={{ rowGap: theme.spacing.s12 }}>
        <View style={{ rowGap: theme.spacing.s4 }}>
          <Text color="text" variant="heading5">
            Notifications
          </Text>

          <Setting
            name="Announcements and Events"
            value={announcementsAndEvents}
            onValueChange={updateAnnouncementsAndEvents}
          />
          <Setting
            name="Snow Day"
            value={snowDay}
            onValueChange={updateSnowDay}
          />
        </View>

        <View style={{ rowGap: theme.spacing.s4 }}>
          <Text color="text" variant="heading5">
            Preferences
          </Text>

          <Setting
            name="Dark Mode"
            value={darkMode}
            onValueChange={updateDarkMode}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Settings;
