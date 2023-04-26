import 'react-native-url-polyfill/auto';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { lightTheme, darkTheme } from './constants/themes';
import { registerRootComponent } from 'expo';
import { SettingsProvider, useSettings } from './contexts/SettingsContext';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import HomeTabs from './HomeTabs';
import Announcement from './screens/home/Announcement';
import Event from './screens/home/Event';
import Transit from './screens/home/TransitScreen';
import ClubsList from './screens/community/ClubsListScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {
  const settings = useSettings();

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
    <NavigationContainer
      theme={settings['Dark Mode'] ? darkTheme : lightTheme}
      onReady={onLayoutRootView}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home Tabs" component={HomeTabs} />
        <Stack.Screen name="Announcement" component={Announcement} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Transit" component={Transit} />
        <Stack.Screen name="Clubs List" component={ClubsList} />
      </Stack.Navigator>
    </NavigationContainer>
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