import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home.js';
import Scan from './scan.js';
import { Ionicons } from 'react-native-vector-icons';

// Tạo Stack Navigator cho màn hình Scan
const Stack = createStackNavigator();
function ScanStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scan" component={Scan} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Tạo Bottom Tabs Navigator
const Tab = createBottomTabNavigator();
function MainTabs() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Scan") {
            iconName = "scan-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Scan" component={Scan} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

// App chính
export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
