/*
useEffect Example Demo
---------------------
This demo shows how to use the UseEffectExample concept component.

Copy-paste instructions:
1. Copy the entire UseEffectExample component from ../../../concepts/UseEffectExample.tsx
2. Import and use: <UseEffectExample />
3. The component demonstrates lifecycle patterns, cleanup functions, dependencies, and practical useEffect examples
*/

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import UseEffectExample from '../../../concepts/UseEffectExample';

export default function UseEffectExampleDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.contextBox}>
        <ThemedText type="title">useEffect Example Demo</ThemedText>
        <ThemedText type="default">
          This demo shows useEffect hook patterns including lifecycle effects, cleanup functions, and dependency management in React.
        </ThemedText>
      </ThemedView>
      <UseEffectExample />
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
