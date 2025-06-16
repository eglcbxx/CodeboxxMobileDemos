/*
SimpleInput Component
---------------------
A clean text input component with optional label for forms and user input.

Copy this file to your project's components folder and import it where needed.
Perfect for forms, search inputs, and any text input needs throughout your app.
*/

import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface SimpleInputProps extends TextInputProps {
  label?: string;
}

const SimpleInput: React.FC<SimpleInputProps> = ({ label, ...textInputProps }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});

export default SimpleInput;