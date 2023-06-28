import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { useSettings, useSettingsDispatch } from '../contexts/SettingsContext';
import {
  registerForPushNotificationsAsync,
  registerDevicePushTokenAsync,
} from '../lib/notifications';

import Layout from '../components/Layout';
import Text from '../components/Text';
import Setting from '../components/Setting';

const Settings = () => {
  const theme = useTheme();
  const settings = useSettings();
  const dispatch = useSettingsDispatch();

  const changeNotification = async (name, value) => {
    const token = await registerForPushNotificationsAsync();

    if (token !== null) {
      // Dispatch change
      dispatch({
        type: 'changed',
        name: name,
        value: value,
      });

      // Update database
      const notificationSettings = {
        'Announcements and Events': settings['Announcements and Events'],
        'Snow Day': settings['Snow Day'],
      };
      const newNotificationSettings = {
        ...notificationSettings,
        [name]: value,
      };
      await registerDevicePushTokenAsync(token, newNotificationSettings);
    }
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
