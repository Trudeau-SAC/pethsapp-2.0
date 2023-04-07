import { useReducer, createContext, useContext } from 'react';

const initialSettings = {
  'Announcements and Events': false,
  'Snow Day': false,
  'Dark Mode': false,
};

export const SettingsContext = createContext(null);
export const SettingsDispatchContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, dispatch] = useReducer(settingsReducer, initialSettings);

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
    case 'toggle': {
      return {
        ...settings,
        [action.name]: !settings[action.name],
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
