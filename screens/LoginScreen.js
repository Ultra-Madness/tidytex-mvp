import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../context/authContext';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const { login } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogin = (role) => {
    login(role);
    if (role === 'client') {
      navigation.navigate('ClientDashboard');
    } else if (role === 'cleaner') {
      navigation.navigate('CleanerDashboard');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TidyTex 👋</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleLogin('client')}>
        <Text style={styles.buttonText}>Login as Client</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleLogin('cleaner')}>
        <Text style={styles.buttonText}>Login as Cleaner</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
