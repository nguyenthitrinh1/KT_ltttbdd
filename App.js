import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from './Tab';
import Payment from './Payment';
import SuccessScreen from './Success';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigation} />
        <Stack.Screen name="Payment" component={Payment}/>
        <Stack.Screen name="SuccessScreen" component={SuccessScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
