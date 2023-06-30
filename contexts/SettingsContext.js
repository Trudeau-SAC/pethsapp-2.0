import { useState, createContext, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import messaging from '@react-native-firebase/messaging';

const initialSettings = {
  'Announcements and Events': true,
  'Snow Day': true,
  'Dark Mode': false,
};

const settingToNotificationTopics = new Map([
  ['Announcements and Events', ['announcements', 'events']],
  ['Snow Day', ['snow-days']],
]);

let didInitSettings = false;

export const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(initialSettings);

  /**
   * Register or unregister to receive notifications for a setting.
   *
   * @param {string} name The setting name
   * @param {boolean} value The setting value
   */
  const registerNotificationTopics = (name, value) => {
    const topics = settingToNotificationTopics.get(name);

    try {
      if (value) {
        for (const topic of topics) {
          messaging().subscribeToTopic(topic);
        }
      } else {
        for (const topic of topics) {
          messaging().unsubscribeFromTopic(topic);
        }
      }
    } catch (error) {
      console.error('Error subscribing to topic:', error);
    }
  };

  /**
   * Update a setting.
   *
   * @param {string} name
   * @param {boolean} value
   */
  const updateSetting = (name, value) => {
    setSettings({ ...settings, [name]: value });

    if (settingToNotificationTopics.has(name)) {
      registerNotificationTopics(name, value);
    }
  };

  useEffect(() => {
    if (!didInitSettings) {
      didInitSettings = true;

      /**
       * Load settings from SecureStore and subscribe to topics.
       */
      async function initSettings() {
        const result = await SecureStore.getItemAsync('settings');
        const value = JSON.parse(result);

        if (result != null) {
          setSettings(value);
        }

        for (const setting of settingToNotificationTopics.keys()) {
          registerNotificationTopics(setting, value[setting]);
        }
      }

      initSettings();
    }
  }, []);

  useEffect(() => {
    // Save settings to SecureStore
    const value = JSON.stringify(settings);
    SecureStore.setItemAsync('settings', value);
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
