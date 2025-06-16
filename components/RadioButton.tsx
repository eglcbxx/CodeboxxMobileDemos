/*
RadioButton Component
---------------------
A single radio button component for selecting one option from a group.

Copy this file to your project's components folder and import it where needed.
Perfect for option selection, settings, and any single-choice interfaces.
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