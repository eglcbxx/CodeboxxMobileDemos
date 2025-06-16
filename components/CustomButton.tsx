/*
CustomButton Component
---------------------
A customizable button component with support for different colors and disabled states.

Copy this file to your project's components folder and import it where needed.
Perfect for actions, forms, and interactive elements throughout your app.
*/

import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, color = '#007bff', disabled = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button, 
        { backgroundColor: color }, 
        disabled && styles.disabled
      ]}
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