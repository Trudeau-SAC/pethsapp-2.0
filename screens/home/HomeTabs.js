import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

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
    tabBarBackground: {
      height: '100%',
    },
  });

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <View>
            <LinearGradient
              style={styles.tabBarBackground}
              colors={[
                theme.colors.primary + 'FF',
                theme.colors.primary + '66',
                theme.colors.primary + '00',
              ]}
              locations={[0, 0.7, 1]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />
          </View>
        ),
        tabBarActiveTintColor: theme.colors.neutral1,
        tabBarInactiveTintColor: theme.colors.onPrimary,
        tabBarIcon: ({ color }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Community':
              iconName = 'users';
              break;
            case 'Resources':
              iconName = 'book-open';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
          }

          return <Feather name={iconName} size={32} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Community" component={Community} />
      <Tabs.Screen name="Resources" component={Resources} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
