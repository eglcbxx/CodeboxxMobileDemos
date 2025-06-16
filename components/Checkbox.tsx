/*
Checkbox Component
------------------
A clean checkbox input component for forms and selection interfaces.

Copy this file to your project's components folder and import it where needed.
Perfect for forms, todo lists, and multi-selection interfaces.
*/

import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => (
  <TouchableOpacity onPress={() => onChange(!checked)}>
    <View style={[styles.box, checked && styles.checkedBox]} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  box: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#007bff',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  checkedBox: {
    backgroundColor: '#007bff',
  },
});

export default Checkbox;