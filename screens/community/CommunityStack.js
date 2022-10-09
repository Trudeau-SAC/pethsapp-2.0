import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Community from './Community';

const Stack = createNativeStackNavigator();

const CommunityStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Community" component={Community} />
    </Stack.Navigator>
  );
};

export default CommunityStack;
