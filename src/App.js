import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { lightTheme } from './constants/themes';
import { registerRootComponent } from 'expo';
import { useReducer } from 'react';
import {
  SettingsContext,
  SettingsDispatchContext,
} from '../contexts/SettingsContext';

import HomeTabs from './HomeTabs';
import Transit from './screens/home/TransitScreen';
import ClubsList from './screens/community/ClubsListScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [settings, dispatch] = useReducer(settingsReducer, initialSettings);

  const [fontsLoaded] = useFonts({
    GeneralSansBold: require('../assets/fonts/GeneralSans-Bold.otf'),
    GeneralSansBoldItalic: require('../assets/fonts/GeneralSans-BoldItalic.otf'),
    GeneralSansSemiBold: require('../assets/fonts/GeneralSans-Semibold.otf'),
    GeneralSansSemiBoldItalic: require('../assets/fonts/GeneralSans-SemiboldItalic.otf'),
    GeneralSansMedium: require('../assets/fonts/GeneralSans-Medium.otf'),
    GeneralSansMediumItalic: require('../assets/fonts/GeneralSans-MediumItalic.otf'),
    GeneralSansRegular: require('../assets/fonts/GeneralSans-Regular.otf'),
    GeneralSansItalic: require('../assets/fonts/GeneralSans-Italic.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SettingsContext.Provider value={settings}>
      <SettingsDispatchContext value={dispatch}>
        <NavigationContainer theme={lightTheme}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home Tabs" component={HomeTabs} />
            <Stack.Screen name="Transit" component={Transit} />
            <Stack.Screen name="Clubs List" component={ClubsList} />
          </Stack.Navigator>
        </NavigationContainer>
      </SettingsDispatchContext>
    </SettingsContext.Provider>
  );
};

const initialSettings = {
  'Announcements and Events': false,
  'Snow Day': false,
  'Dark Mode': false,
};

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

registerRootComponent(App);
