/*
Operators Demo
--------------
Copy-paste example showing arithmetic, logical, comparison, and assignment operators.

1. Copy the entire Operators.tsx file to your concepts folder
2. Import: import Operators from '../../../concepts/Operators';
3. Use: <Operators />

Shows all JavaScript/TypeScript operator types with practical examples.
*/

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Operators from '../../../concepts/Operators';

export default function OperatorsDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Operators Demo</ThemedText>
      
      <View style={styles.contextBox}>
        <ThemedText style={styles.contextText}>
          Ready-to-copy implementation of JavaScript/TypeScript operators.
          Demonstrates arithmetic, logical, comparison, and advanced operator patterns.
        </ThemedText>
      </View>

      <Operators />
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
