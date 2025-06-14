/*
CustomButton Component
---------------------
A customizable button for user actions.

Usage:
import CustomButton from './components/CustomButton';

<CustomButton title="Click Me" onPress={() => alert('Clicked!')} />
<CustomButton title="Disabled" disabled color="#888" onPress={() => {}} />

Props:
- title: string // Button text
- onPress: (event: GestureResponderEvent) => void // Function to call on press
- color?: string // Button background color (default: #007bff)
- disabled?: boolean // Disable the button (default: false)
*/

import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, color, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color || '#007bff' }, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default CustomButton;