// Allows setting page to change theme
import { createContext } from 'react';

export const SettingsContext = createContext({
  notifications: {
    'Announcements and Events': false,
    'Snow Day': true,
  },
  preferences: {
    'Dark Mode': false,
  },
});
