// screens/LoginScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/authContext';

const LoginScreen = () => {
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TidyTex</Text>
      <Button title="Login as Client" onPress={() => login('client')} />
      <View style={styles.spacer} />
      <Button title="Login as Cleaner" onPress={() => login('cleaner')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff', // Light background so buttons and text are visible
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    textAlign: 'center',
    color: '#333', // Darker text for contrast
  },
  spacer: {
    height: 20,
  },
});

export default LoginScreen;
