/*
Break and Continue Demo
-----------------------
Copy-paste example showing loop control statements implementation.

1. Copy the entire BreakContinue.tsx file to your concepts folder
2. Import: import BreakContinue from '../../../concepts/BreakContinue';
3. Use: <BreakContinue />

Shows break, continue, labeled breaks, and practical loop control patterns.
*/

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import BreakContinue from '../../../concepts/BreakContinue';

export default function BreakContinueDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Break and Continue Demo</ThemedText>
      
      <View style={styles.contextBox}>
        <ThemedText style={styles.contextText}>
          Ready-to-copy implementation of break and continue statements.
          Demonstrates loop control, early termination, and iteration skipping patterns.
        </ThemedText>
      </View>

      <BreakContinue />
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
