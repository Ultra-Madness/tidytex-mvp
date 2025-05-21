import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider, AuthContext } from './context/authContext';
import LoginScreen from './screens/LoginScreen';
import ClientDashboard from './screens/ClientDashboard';
import CleanerDashboard from './screens/CleanerDashboard';
import ClientBookingScreen from './screens/ClientBookingScreen';

const Stack = createNativeStackNavigator();

function AppContent() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {!user ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : user.role === 'client' ? (
          <>
            <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
            <Stack.Screen name="ClientBookingScreen" component={ClientBookingScreen} />
          </>
        ) : (
          <Stack.Screen name="CleanerDashboard" component={CleanerDashboard} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

