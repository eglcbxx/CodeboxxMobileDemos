/*
Recursion Demo
--------------
This demo shows how to use the Recursion concept component.

Copy-paste instructions:
1. Copy the entire Recursion component from ../../../concepts/Recursion.tsx
2. Import and use: <Recursion />
3. The component demonstrates factorial calculation, Fibonacci sequence, and tree traversal examples
*/

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Recursion from '../../../concepts/Recursion';

export default function RecursionDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.contextBox}>
        <ThemedText type="title">Recursion Demo</ThemedText>
        <ThemedText type="default">
          This demo shows recursive functions including mathematical recursion, data structure traversal, and optimization patterns.
        </ThemedText>
      </ThemedView>
      <Recursion />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  contextBox: {
    padding: 16,
    backgroundColor: 'rgba(0, 100, 200, 0.1)',
    borderRadius: 8,
    marginBottom: 16,
  },
});
