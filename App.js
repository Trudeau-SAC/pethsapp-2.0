import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/home/Home';
import Community from './screens/community/Community';
import Resources from './screens/resources/Resources';
import Settings from './screens/settings/Settings';

const Tabs = createBottomTabNavigator();

const App = () => {
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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Community" component={Community} />
        <Tabs.Screen name="Resources" component={Resources} />
        <Tabs.Screen name="Settings" component={Settings} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
