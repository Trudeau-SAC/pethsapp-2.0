import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Community from '../community/Community';
import Resources from '../resources/Resources';
import Settings from '../settings/Settings';

const Tabs = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Community" component={Community} />
      <Tabs.Screen name="Resources" component={Resources} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
