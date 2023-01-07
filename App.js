import { useFonts } from 'expo-font';
import { useState } from 'react';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme, darkTheme } from './constants/theme';
import { ThemeContext } from './utils/themeContext';

import HomeTabs from './screens/home/HomeTabs';
import Transit from './screens/home/Transit';
import ClubsList from './screens/community/ClubsList';

const themes = {
  light: theme,
  dark: darkTheme,
};

const Stack = createNativeStackNavigator();

const App = () => {
  const [theme, setTheme] = useState('light');

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
    <ThemeContext.Provider value={{ theme: themes[theme], setTheme }}>
      <NavigationContainer theme={themes[theme]}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home Tabs" component={HomeTabs} />
          <Stack.Screen name="Transit" component={Transit} />
          <Stack.Screen name="Clubs List" component={ClubsList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
