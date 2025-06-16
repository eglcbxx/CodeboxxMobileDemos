/*
Asynchronous Constructs Demo
----------------------------
Copy-paste example showing Promises, async/await, and concurrent operations.

1. Copy the entire AsynchronousConstructs.tsx file to your concepts folder
2. Import: import AsynchronousConstructs from '../../../concepts/AsynchronousConstructs';
3. Use: <AsynchronousConstructs />

Shows async patterns, Promise handling, and React useEffect integration.
*/

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AsynchronousConstructs from '../../../concepts/AsynchronousConstructs';

export default function AsynchronousConstructsDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Asynchronous Constructs Demo</ThemedText>
      
      <View style={styles.contextBox}>
        <ThemedText style={styles.contextText}>
          Ready-to-copy implementation of JavaScript/TypeScript async patterns.
          Demonstrates Promises, async/await, and concurrent operation handling.
        </ThemedText>
      </View>

      <AsynchronousConstructs />
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
