/*
Scope Demo
----------
This demo shows how to use the Scope concept component.

Copy-paste instructions:
1. Copy the entire Scope component from ../../../concepts/Scope.tsx
2. Import and use: <Scope />
3. The component demonstrates lexical scoping, closures, variable shadowing, and scope rules
*/

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Scope from '../../../concepts/Scope';

export default function ScopeDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.contextBox}>
        <ThemedText type="title">Scope Demo</ThemedText>
        <ThemedText type="default">
          This demo shows variable and function scope including lexical scoping, closures, and variable shadowing in JavaScript/TypeScript.
        </ThemedText>
      </ThemedView>
      <Scope />
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
