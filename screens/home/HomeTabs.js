import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

import Home from './Home';
import Community from '../community/Community';
import Resources from '../resources/Resources';
import Settings from '../settings/Settings';

const Tabs = createBottomTabNavigator();

const HomeTabs = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    tabBar: {
      position: 'absolute',
      backgroundColor: 'transparent',
      borderTopColor: 'transparent',
      height: 100,
    },
    gradient: {
      height: '100%',
    },
  });

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <View>
            <LinearGradient
              style={styles.gradient}
              colors={[
                theme.colors.primary + 'CC',
                theme.colors.primary + '00',
              ]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />
          </View>
        ),
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Community" component={Community} />
      <Tabs.Screen name="Resources" component={Resources} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
