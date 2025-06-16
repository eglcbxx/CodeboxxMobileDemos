/*
Type Declarations Demo
---------------------
This demo shows how to use the TypeDeclarations concept component.

Copy-paste instructions:
1. Copy the entire TypeDeclarations component from ../../../concepts/TypeDeclarations.tsx
2. Import and use: <TypeDeclarations />
3. The component demonstrates type aliases, interfaces, generics, and advanced TypeScript type patterns
*/

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TypeDeclarations from '../../../concepts/TypeDeclarations';

export default function TypeDeclarationsDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.contextBox}>
        <ThemedText type="title">Type Declarations Demo</ThemedText>
        <ThemedText type="default">
          This demo shows TypeScript type declarations including type aliases, interfaces, generics, and advanced type patterns.
        </ThemedText>
      </ThemedView>
      <TypeDeclarations />
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
