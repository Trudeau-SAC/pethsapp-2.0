import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { lightTheme } from './constants/themes';
import { registerRootComponent } from 'expo';

import HomeTabs from './HomeTabs';

// Home
import Transit from './screens/home/TransitScreen';

// Community
import ClubsList from './screens/community/ClubsListScreen';

// Resources

const Stack = createNativeStackNavigator();

const App = () => {
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
    <NavigationContainer theme={lightTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home Tabs" component={HomeTabs} />

        {/* Home */}
        <Stack.Screen name="Transit" component={Transit} />

        {/* Community */}
        <Stack.Screen name="Clubs List" component={ClubsList} />

        {/* Resources */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);
