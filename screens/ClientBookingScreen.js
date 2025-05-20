import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ClientBookingScreen = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleBooking = () => {
    if (!selectedType) {
      alert('Please select a cleaning type before booking.');
      return;
    }
    alert(`Cleaning booked: ${selectedType} Cleaning on [date/time placeholder]`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Cleaning</Text>

      <Text style={styles.subtitle}>Choose Cleaning Type:</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedType === 'Standard' && styles.selectedButton,
          ]}
          onPress={() => setSelectedType('Standard')}
        >
          <Text>Standard Cleaning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedType === 'Deep' && styles.selectedButton,
          ]}
          onPress={() => setSelectedType('Deep')}
        >
          <Text>Deep Cleaning</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Select Date & Time:</Text>
      <Text style={{ marginBottom: 10 }}>[Date/Time Picker Coming Soon]</Text>

      <Button title="Confirm Booking" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonGroup: {
    marginBottom: 20,
  },
  optionButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#cceeff',
  },
});

export default ClientBookingScreen;