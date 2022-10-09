import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Resources from './Resources';
import ClubsList from './ClubsList';

const Stack = createNativeStackNavigator();

const ResourcesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Resources" component={Resources} />
      <Stack.Screen name="Clubs List" component={ClubsList} />
    </Stack.Navigator>
  );
};

export default ResourcesStack;
