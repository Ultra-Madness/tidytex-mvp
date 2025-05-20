import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ClientDashboard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Client Dashboard 🧼</Text>
      <Button
        title="Book a Cleaning"
        onPress={() => navigation.navigate('BookCleaning')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
