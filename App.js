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
    <Stack.Navigator>
      {!user ? (
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      ) : user.role === 'client' ? (
        <>
          <Stack.Screen name="ClientDashboard" component={ClientDashboard} options={{ title: 'Client Dashboard' }} />
          <Stack.Screen name="ClientBookingScreen" component={ClientBookingScreen} options={{ title: 'Book a Cleaning' }} />
        </>
      ) : (
        <Stack.Screen name="CleanerDashboard" component={CleanerDashboard} options={{ title: 'Cleaner Dashboard' }} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </NavigationContainer>
  );
}