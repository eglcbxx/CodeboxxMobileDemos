/*
Classes and Objects Demo
------------------------
Copy-paste example showing object-oriented programming implementation.

1. Copy the entire ClassesAndObjects.tsx file to your concepts folder
2. Import: import ClassesAndObjects from '../../../concepts/ClassesAndObjects';
3. Use: <ClassesAndObjects />

Shows classes, inheritance, static methods, encapsulation, and OOP principles.
*/

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ClassesAndObjects from '../../../concepts/ClassesAndObjects';

export default function ClassesAndObjectsDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Classes and Objects Demo</ThemedText>
      
      <View style={styles.contextBox}>
        <ThemedText style={styles.contextText}>
          Ready-to-copy implementation of TypeScript classes and objects.
          Demonstrates OOP principles, inheritance, encapsulation, and static methods.
        </ThemedText>
      </View>

      <ClassesAndObjects />
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
