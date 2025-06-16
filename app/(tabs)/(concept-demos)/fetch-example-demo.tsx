/*
Fetch Example Demo
------------------
Copy-paste example showing HTTP requests, loading states, and error handling.

1. Copy the entire FetchExample.tsx file to your concepts folder
2. Import: import FetchExample from '../../../concepts/FetchExample';
3. Use: <FetchExample />

Shows real API calls, mock data, loading states, and error management.
*/

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FetchExample from '../../../concepts/FetchExample';

export default function FetchExampleDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Fetch Example Demo</ThemedText>
      
      <View style={styles.contextBox}>
        <ThemedText style={styles.contextText}>
          Ready-to-copy implementation of HTTP requests and data fetching.
          Demonstrates API calls, loading states, and error handling patterns.
        </ThemedText>
      </View>

      <FetchExample />
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
