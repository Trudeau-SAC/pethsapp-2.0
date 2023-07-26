import 'react-native-url-polyfill/auto';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { lightTheme, darkTheme } from './constants/themes';
import { registerRootComponent } from 'expo';
import { SettingsProvider, useDarkMode } from './contexts/SettingsContext';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Platform, PermissionsAndroid } from 'react-native';

import HomeTabs from './HomeTabs';
import Announcement from './screens/home/AnnouncementScreen';
import Event from './screens/home/EventScreen';
import PastEvents from './screens/home/PastEventsScreen';
import ClubsList from './screens/community/ClubsListScreen';
import ClubStatus from './screens/community/ClubStatusScreen';
import ClubFunding from './screens/community/ClubFundingScreen';
import ClubPromotion from './screens/community/ClubPromotionScreen';
import TechTeam from './screens/community/TechTeamScreen';
import Volunteering from './screens/community/VolunteeringScreen';
import YouthCommittees from './screens/community/YouthCommitteesScreen';
import StudyResources from './screens/resources/StudyResourcesScreen';
import PostSecondary from './screens/resources/PostSecondaryScreen';
import FAQ from './screens/resources/FAQScreen';
import StudentServices from './screens/resources/StudentServicesScreen';

SplashScreen.preventAutoHideAsync();

// Request notification permissions
if (Platform.OS === 'ios') {
  messaging().requestPermission();
} else if (Platform.OS === 'android') {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
}

const Stack = createNativeStackNavigator();

const App = () => {
  const { darkMode } = useDarkMode();
  const theme = darkMode ? darkTheme : lightTheme;

  // Load fonts
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

  // Screen options
  const options = {
    webViewScreen: {
      headerShown: true,
      headerTintColor: theme.colors.onPrimary,
      headerTitleAlign: 'center',
      statusBarStyle: 'light',
    },
  };

  return (
    <NavigationContainer theme={theme} onReady={onLayoutRootView}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarStyle: darkMode ? 'light' : 'dark',
          statusBarTranslucent: true,
        }}
      >
        <Stack.Screen name="Home Tabs" component={HomeTabs} />
        <Stack.Screen name="Announcement" component={Announcement} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Past Events" component={PastEvents} />
        <Stack.Screen name="Clubs List" component={ClubsList} />
        <Stack.Screen name="Club Status" component={ClubStatus} />
        <Stack.Screen
          name="Club Funding"
          component={ClubFunding}
          options={options.webViewScreen}
        />
        <Stack.Screen
          name="Club Promotion"
          component={ClubPromotion}
          options={options.webViewScreen}
        />
        <Stack.Screen name="Tech Team" component={TechTeam} />
        <Stack.Screen name="Volunteering" component={Volunteering} />
        <Stack.Screen name="Youth Committees" component={YouthCommittees} />
        <Stack.Screen name="Study Resources" component={StudyResources} />
        <Stack.Screen
          name="Post-Secondary"
          component={PostSecondary}
          options={options.webViewScreen}
        />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen
          name="Student Services"
          component={StudentServices}
          options={options.webViewScreen}
        />
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
