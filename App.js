import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import AuthProvider, { AuthContext } from './context/authContext';
import LoginScreen from './screens/LoginScreen';

const AppContent = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <LoginScreen />;
  }

  if (user.role === 'client') {
    return (
      <View style={styles.center}>
        <Text>Welcome, Client 👩🏽‍💼</Text>
      </View>
    );
  }

  if (user.role === 'cleaner') {
    return (
      <View style={styles.center}>
        <Text>Welcome, Cleaner 🧼</Text>
      </View>
    );
  }

  return null;
};

const styles = {
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
