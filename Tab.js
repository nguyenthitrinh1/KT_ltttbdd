import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Home from './home';
import Scan from './scan';
import Cart from'./Cart';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Scan') {
              iconName = focused ? 'scan-circle' : 'scan';
            }
            else if(route==='Cart'){
              iconName = focused ?'shopping-basket':'shopping-basket';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Scan" component={Scan} />
        <Tab.Screen name="Cart" component={Cart} />

      </Tab.Navigator>
  );
}
