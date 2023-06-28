import { useReducer, createContext, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const initialSettings = {
  'Announcements and Events': false,
  'Snow Day': false,
  'Dark Mode': false,
};

export const SettingsContext = createContext(null);
export const SettingsDispatchContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, dispatch] = useReducer(settingsReducer, initialSettings);

  useEffect(() => {
    // Load settings from SecureStore
    let ignore = false;
    async function fetchSettings() {
      for (const [name] of Object.entries(initialSettings)) {
        const key = name.replaceAll(' ', '_');
        const result = await SecureStore.getItemAsync(key);
        const value = JSON.parse(result);

        if (result != null && !ignore) {
          dispatch({
            type: 'changed',
            name: name,
            value: value,
          });
        }
      }
    }
    fetchSettings();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <SettingsContext.Provider value={settings}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}

export function useSettingsDispatch() {
  return useContext(SettingsDispatchContext);
}

function settingsReducer(settings, action) {
  switch (action.type) {
    case 'changed': {
      // Save the new value to SecureStore
      const key = action.name.replaceAll(' ', '_');
      const value = JSON.stringify(action.value);
      SecureStore.setItemAsync(key, value);

      return {
        ...settings,
        [action.name]: action.value,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
