import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientDashboard from '../screens/ClientDashboard';
import CleanerDashboard from '../screens/CleanerDashboard';
import ClientBookingScreen from '../screens/ClientBookingScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
      <Stack.Screen name="CleanerDashboard" component={CleanerDashboard} />
      <Stack.Screen name="ClientBooking" component={ClientBookingScreen} />
    </Stack.Navigator>
  );
}
