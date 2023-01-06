import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTabs from './screens/home/HomeTabs';
import Transit from './screens/home/Transit';
import ClubsList from './screens/community/ClubsList';

const lightTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(42, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Stack = createNativeStackNavigator();

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
    <NavigationContainer theme={lightTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home Tabs" component={HomeTabs} />
        <Stack.Screen name="Transit" component={Transit} />
        <Stack.Screen name="Clubs List" component={ClubsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
