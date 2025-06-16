/*
Return Statements Demo
---------------------
This demo shows how to use the ReturnStatements concept component.

Copy-paste instructions:
1. Copy the entire ReturnStatements component from ../../../concepts/ReturnStatements.tsx
2. Import and use: <ReturnStatements />
3. The component demonstrates early returns, conditional returns, async returns, and return patterns
*/

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ReturnStatements from '../../../concepts/ReturnStatements';

export default function ReturnStatementsDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.contextBox}>
        <ThemedText type="title">Return Statements Demo</ThemedText>
        <ThemedText type="default">
          This demo shows return statement patterns including early returns, conditional returns, and async function returns.
        </ThemedText>
      </ThemedView>
      <ReturnStatements />
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
