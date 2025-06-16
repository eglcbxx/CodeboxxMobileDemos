/*
Badge Component
---------------
A small notification or status label component with customizable colors.

Copy this file to your project's components folder and import it where needed.
Perfect for status indicators, notifications counts, and category labels.
*/


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BadgeProps {
  label: string;
  color?: string;
  backgroundColor?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, color = '#fff', backgroundColor = '#007bff' }) => (
  <View style={[styles.badge, { backgroundColor }]}> 
    <Text style={[styles.text, { color }]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Badge;