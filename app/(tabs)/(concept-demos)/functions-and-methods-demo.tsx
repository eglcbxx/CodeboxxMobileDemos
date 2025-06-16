/*
Functions and Methods Demo
--------------------------
Copy-paste example showing function declarations, arrow functions, and method implementations.

1. Copy the entire FunctionsAndMethods.tsx file to your concepts folder
2. Import: import FunctionsAndMethods from '../../../concepts/FunctionsAndMethods';
3. Use: <FunctionsAndMethods />

Shows regular functions, arrow functions, optional parameters, and object methods.
*/

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FunctionsAndMethods from '../../../concepts/FunctionsAndMethods';

export default function FunctionsAndMethodsDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Functions and Methods Demo</ThemedText>
      
      <View style={styles.contextBox}>
        <ThemedText style={styles.contextText}>
          Ready-to-copy implementation of JavaScript/TypeScript function patterns.
          Demonstrates function declarations, arrow functions, and object method definitions.
        </ThemedText>
      </View>

      <FunctionsAndMethods />
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
