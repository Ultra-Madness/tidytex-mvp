import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from './context/authContext';
import AppNavigator from './navigation/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <AppContainer />
    </AuthProvider>
  );
}

function AppContainer() {
  const { user } = useContext(AuthContext);
  return <AppNavigator user={user} />;
}
