/*
Function Calls Demo
-------------------
Copy-paste example showing function invocation patterns and argument handling.

1. Copy the entire FunctionCalls.tsx file to your concepts folder
2. Import: import FunctionCalls from '../../../concepts/FunctionCalls';
3. Use: <FunctionCalls />

Shows basic calls, callbacks, higher-order functions, and method chaining.
*/

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FunctionCalls from '../../../concepts/FunctionCalls';

export default function FunctionCallsDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Function Calls Demo</ThemedText>
      
      <View style={styles.contextBox}>
        <ThemedText style={styles.contextText}>
          Ready-to-copy implementation of JavaScript/TypeScript function calling patterns.
          Demonstrates argument passing, callbacks, and advanced invocation techniques.
        </ThemedText>
      </View>

      <FunctionCalls />
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
