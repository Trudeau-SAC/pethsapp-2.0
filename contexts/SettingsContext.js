import { useState, createContext, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import messaging from '@react-native-firebase/messaging';

let didInit = false;

export const AnnouncementsAndEventsContext = createContext(null);
export const SnowDayContext = createContext(null);
export const DarkModeContext = createContext(null);

const stringToBoolean = (string) => {
  return string === 'true';
};

const updateAnnouncementsAndEventsNotifications = (value) => {
  if (value) {
    messaging().subscribeToTopic('announcements');
    messaging().subscribeToTopic('events');
  } else {
    messaging().unsubscribeFromTopic('announcements');
    messaging().unsubscribeFromTopic('events');
  }
};

const updateSnowDayNotifications = (value) => {
  if (value) {
    messaging().subscribeToTopic('snow-days');
  } else {
    messaging().unsubscribeFromTopic('snow-days');
  }
};

export function SettingsProvider({ children }) {
  const [announcementsAndEvents, setAnnouncementsAndEvents] = useState(null);
  const [snowDay, setSnowDay] = useState(null);
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    if (!didInit) {
      didInit = true;

      SecureStore.getItemAsync('announcementsAndEvents').then((value) => {
        if (value) {
          value = stringToBoolean(value);
        } else {
          value = true;
          SecureStore.setItemAsync('announcementsAndEvents', value.toString());
        }

        setAnnouncementsAndEvents(value);
        updateAnnouncementsAndEventsNotifications(value);
      });

      SecureStore.getItemAsync('snowDay').then((value) => {
        if (value) {
          value = stringToBoolean(value);
        } else {
          value = true;
          SecureStore.setItemAsync('snowDay', value.toString());
        }

        setSnowDay(value);
        updateSnowDayNotifications(value);
      });

      SecureStore.getItemAsync('darkMode').then((value) => {
        if (value) {
          value = stringToBoolean(value);
        } else {
          value = false;
          SecureStore.setItemAsync('darkMode', value.toString());
        }

        setDarkMode(value);
      });
    }
  }, []);

  const updateAnnouncementsAndEvents = (value) => {
    setAnnouncementsAndEvents(value);
    SecureStore.setItemAsync('announcementsAndEvents', value.toString());
    updateAnnouncementsAndEventsNotifications(value);
  };

  const updateSnowDay = (value) => {
    setSnowDay(value);
    SecureStore.setItemAsync('snowDay', value.toString());
    updateSnowDayNotifications(value);
  };

  const updateDarkMode = (value) => {
    setDarkMode(value);
    SecureStore.setItemAsync('darkMode', value.toString());
  };

  return (
    <AnnouncementsAndEventsContext.Provider
      value={{ announcementsAndEvents, updateAnnouncementsAndEvents }}
    >
      <SnowDayContext.Provider value={{ snowDay, updateSnowDay }}>
        <DarkModeContext.Provider value={{ darkMode, updateDarkMode }}>
          {children}
        </DarkModeContext.Provider>
      </SnowDayContext.Provider>
    </AnnouncementsAndEventsContext.Provider>
  );
}

export function useAnnouncementsAndEvents() {
  return useContext(AnnouncementsAndEventsContext);
}

export function useSnowDay() {
  return useContext(SnowDayContext);
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
