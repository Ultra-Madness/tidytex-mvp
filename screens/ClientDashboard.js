import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ClientDashboard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Client 👩🏽‍💼</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ClientBookingScreen')}
      >
        <Text style={styles.buttonText}>Book a Cleaning</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // ...styles here
});
