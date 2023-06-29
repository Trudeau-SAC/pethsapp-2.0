import { useState, createContext, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const initialSettings = {
  'Announcements and Events': false,
  'Snow Day': false,
  'Dark Mode': false,
};

export const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    // Load settings from SecureStore
    let ignore = false;

    async function fetchSettings() {
      const result = await SecureStore.getItemAsync('settings');
      const value = JSON.parse(result);

      if (result != null && !ignore) {
        setSettings(value);
      }
    }
    fetchSettings();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    // Save settings to SecureStore
    async function saveSettings() {
      const value = JSON.stringify(settings);
      await SecureStore.setItemAsync('settings', value);
    }
    saveSettings();
  }, [settings, setSettings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
