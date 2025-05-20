import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CleanerDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Cleaner Dashboard 🧹</Text>
      <Button title="View Available Jobs" onPress={() => alert('Job list coming soon!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6ffe6',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
