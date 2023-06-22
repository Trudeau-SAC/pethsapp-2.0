import 'react-native-url-polyfill/auto';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { lightTheme, darkTheme } from './constants/themes';
import { registerRootComponent } from 'expo';
import { SettingsProvider, useSettings } from './contexts/SettingsContext';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import HomeTabs from './HomeTabs';
import Announcement from './screens/home/AnnouncementScreen';
import Event from './screens/home/EventScreen';
import PastEvents from './screens/home/PastEventsScreen';
import ClubsList from './screens/community/ClubsListScreen';
import ClubStatus from './screens/community/ClubStatusScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return false;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
    return false;
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

const App = () => {
  const settings = useSettings();
  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const [fontsLoaded] = useFonts({
    GeneralSansBold: require('./assets/fonts/GeneralSans-Bold.otf'),
    GeneralSansBoldItalic: require('./assets/fonts/GeneralSans-BoldItalic.otf'),
    GeneralSansSemiBold: require('./assets/fonts/GeneralSans-Semibold.otf'),
    GeneralSansSemiBoldItalic: require('./assets/fonts/GeneralSans-SemiboldItalic.otf'),
    GeneralSansMedium: require('./assets/fonts/GeneralSans-Medium.otf'),
    GeneralSansMediumItalic: require('./assets/fonts/GeneralSans-MediumItalic.otf'),
    GeneralSansRegular: require('./assets/fonts/GeneralSans-Regular.otf'),
    GeneralSansItalic: require('./assets/fonts/GeneralSans-Italic.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style={settings['Dark Mode'] ? 'light' : 'dark'} />
      <NavigationContainer
        theme={settings['Dark Mode'] ? darkTheme : lightTheme}
        onReady={onLayoutRootView}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home Tabs" component={HomeTabs} />
          <Stack.Screen name="Announcement" component={Announcement} />
          <Stack.Screen name="Event" component={Event} />
          <Stack.Screen name="Past Events" component={PastEvents} />
          <Stack.Screen name="Clubs List" component={ClubsList} />
          <Stack.Screen name="Club Status" component={ClubStatus} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const AppWrapper = () => {
  return (
    <SettingsProvider>
      <App />
    </SettingsProvider>
  );
};

registerRootComponent(AppWrapper);
