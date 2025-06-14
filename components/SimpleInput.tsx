/*
SimpleInput Component
--------------------
A basic text input with an optional label.

Usage:
import SimpleInput from './components/SimpleInput';

<SimpleInput label="Username" value={username} onChangeText={setUsername} />
<SimpleInput placeholder="Type here..." />

Props:
- label?: string // Optional label above the input
- ...TextInputProps // Any other TextInput props (value, onChangeText, placeholder, etc.)
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