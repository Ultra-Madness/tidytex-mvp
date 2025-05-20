import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ClientDashboard from '../screens/ClientDashboard';
import CleanerDashboard from '../screens/CleanerDashboard';
import LoginScreen from '../screens/LoginScreen';
import ClientBookingScreen from '../screens/ClientBookingScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator({ user }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {!user ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : user.role === 'client' ? (
          <>
            <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
            <Stack.Screen name="BookCleaning" component={ClientBookingScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="CleanerDashboard" component={CleanerDashboard} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
