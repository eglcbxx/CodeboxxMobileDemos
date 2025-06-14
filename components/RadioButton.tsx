/*
RadioButton Component
---------------------
A single radio button for selecting one option.

Usage:
import RadioButton from './components/RadioButton';

<RadioButton selected={true} onPress={() => setSelected(true)} />

Props:
- selected: boolean // Whether selected
- onPress: () => void // Callback when pressed
*/

import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export interface RadioButtonProps {
  value: string;
  label: string;
  selected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ selected, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.outer}>
    <View style={[styles.inner, selected && styles.selected]} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  outer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  selected: {
    backgroundColor: '#007bff',
  },
});

export default RadioButton;