import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import {
  useSettings,
  useNotificationSettings,
  useSettingsDispatch,
} from '../contexts/SettingsContext';
import { registerForPushNotificationsAsync } from '../lib/notifications';

import Layout from '../components/Layout';
import Text from '../components/Text';
import Setting from '../components/Setting';

const Settings = () => {
  const theme = useTheme();
  const settings = useSettings();
  const notificationSettings = useNotificationSettings();
  const dispatch = useSettingsDispatch();

  const changeNotification = async (name, value) => {
    const token = await registerForPushNotificationsAsync(notificationSettings);

    if (token === null) return;

    // Update database with token
    if (value === true) {
    } else if (value === false) {
    }

    // Dispatch change
    dispatch({
      type: 'changed',
      name: name,
      value: value,
    });
  };

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
              changeNotification('Announcements and Events', value)
            }
          />
          <Setting
            name="Snow Day"
            value={settings['Snow Day']}
            onValueChange={(value) => changeNotification('Snow Day', value)}
          />
        </View>

        <View style={{ rowGap: theme.spacing.s4 }}>
          <Text color="text" variant="heading5">
            Preferences
          </Text>

          <Setting
            name="Dark Mode"
            value={settings['Dark Mode']}
            onValueChange={() =>
              dispatch({
                type: 'changed',
                name: 'Dark Mode',
                value: !settings['Dark Mode'],
              })
            }
          />
        </View>
      </View>
    </Layout>
  );
};

export default Settings;
