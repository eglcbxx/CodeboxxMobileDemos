/*
Import Export Demo
------------------
Copy-paste example showing ES6 module system implementation.

1. Copy the entire ImportExport.tsx file to your concepts folder
2. Import: import ImportExport from '../../../concepts/ImportExport';
3. Use: <ImportExport />

Shows default exports, named exports, interfaces, classes, and import patterns.
*/

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImportExport from '../../../concepts/ImportExport';

export default function ImportExportDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Import Export Demo</ThemedText>
      
      <View style={styles.contextBox}>
        <ThemedText style={styles.contextText}>
          Ready-to-copy implementation of ES6 module import/export patterns.
          Demonstrates module organization, named exports, and code structure.
        </ThemedText>
      </View>

      <ImportExport />
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
