/*
Exception Handling Demo
-----------------------
Copy-paste example showing try/catch/finally and error handling patterns.

1. Copy the entire ExceptionHandling.tsx file to your concepts folder
2. Import: import ExceptionHandling from '../../../concepts/ExceptionHandling';
3. Use: <ExceptionHandling />

Shows error handling, async error management, and exception recovery patterns.
*/

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ExceptionHandling from '../../../concepts/ExceptionHandling';

export default function ExceptionHandlingDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Exception Handling Demo</ThemedText>
      
      <View style={styles.contextBox}>
        <ThemedText style={styles.contextText}>
          Ready-to-copy implementation of JavaScript/TypeScript error handling.
          Demonstrates try/catch/finally blocks and async error management.
        </ThemedText>
      </View>

      <ExceptionHandling />
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
