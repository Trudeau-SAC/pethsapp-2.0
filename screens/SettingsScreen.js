import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { useSettings } from '../contexts/SettingsContext';

import Layout from '../components/Layout';
import Text from '../components/Text';
import Setting from '../components/Setting';

const Settings = () => {
  const theme = useTheme();
  const { settings, updateSetting } = useSettings();

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
            value={settings['Announcements and Events']}
            onValueChange={(value) =>
              updateSetting('Announcements and Events', value)
            }
          />
          <Setting
            name="Snow Day"
            value={settings['Snow Day']}
            onValueChange={(value) => updateSetting('Snow Day', value)}
          />
        </View>

        <View style={{ rowGap: theme.spacing.s4 }}>
          <Text color="text" variant="heading5">
            Preferences
          </Text>

          <Setting
            name="Dark Mode"
            value={settings['Dark Mode']}
            onValueChange={(value) => updateSetting('Dark Mode', value)}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Settings;
