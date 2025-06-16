/*
Comments Demo
-------------
Copy-paste example showing commenting patterns and documentation styles.

1. Copy the entire Comments.tsx file to your concepts folder
2. Import: import Comments from '../../../concepts/Comments';
3. Use: <Comments />

Shows single-line, multi-line, JSDoc, and JSX commenting best practices.
*/

import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Comments from '../../../concepts/Comments';

export default function CommentsDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Comments Demo</ThemedText>
      
      <View style={styles.contextBox}>
        <ThemedText style={styles.contextText}>
          Ready-to-copy implementation of JavaScript/TypeScript commenting patterns.
          Demonstrates documentation styles, best practices, and commenting guidelines.
        </ThemedText>
      </View>

      <Comments />
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
