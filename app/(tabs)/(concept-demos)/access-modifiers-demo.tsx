/*
Access Modifiers Demo
---------------------
Copy-paste example showing TypeScript access modifiers implementation.

1. Copy the entire AccessModifiers.tsx file to your concepts folder
2. Import: import AccessModifiers from '../../../concepts/AccessModifiers';
3. Use: <AccessModifiers />

Shows public, private, and protected class members with inheritance examples.
*/

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AccessModifiers from '../../../concepts/AccessModifiers';

export default function AccessModifiersDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Access Modifiers Demo</ThemedText>
      
      <View style={styles.contextBox}>
        <ThemedText style={styles.contextText}>
          Ready-to-copy implementation of TypeScript access modifiers (public, private, protected).
          Demonstrates encapsulation, inheritance, and controlled access patterns.
        </ThemedText>
      </View>

      <AccessModifiers />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  contextBox: {
    backgroundColor: '#e8f4ff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  contextText: {
    fontSize: 14,
    color: '#0066cc',
    lineHeight: 20,
  },
});
