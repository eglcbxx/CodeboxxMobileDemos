/*
Badge Component
---------------
Displays a small label for status or notifications.

Usage:
import Badge from './components/Badge';

<Badge label="New" />
<Badge label="Active" backgroundColor="#28a745" color="#fff" />

Props:
- label: string // Text to display
- color?: string // Text color (default: #fff)
- backgroundColor?: string // Badge background (default: #007bff)
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