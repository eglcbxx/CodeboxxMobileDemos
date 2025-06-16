/*
Parameters and Arguments Demo
----------------------------
This demo shows how to use the ParametersAndArguments concept component.

Copy-paste instructions:
1. Copy the entire ParametersAndArguments component from ../../../concepts/ParametersAndArguments.tsx
2. Import and use: <ParametersAndArguments />
3. The component demonstrates function parameters, optional parameters, default values, and rest parameters
*/

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ParametersAndArguments from '../../../concepts/ParametersAndArguments';

export default function ParametersAndArgumentsDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.contextBox}>
        <ThemedText type="title">Parameters and Arguments Demo</ThemedText>
        <ThemedText type="default">
          This demo shows function parameters, arguments, default values, and various parameter patterns in TypeScript.
        </ThemedText>
      </ThemedView>
      <ParametersAndArguments />
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
