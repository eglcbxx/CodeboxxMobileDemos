/*
Comments
--------
JavaScript/TypeScript commenting patterns for code documentation and annotation.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding proper code documentation and commenting best practices.
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * JSDoc comment - provides type information and documentation
 * @param value - The value to be processed
 * @param multiplier - The multiplication factor
 * @returns The calculated result
 */
function calculateValue(value: number, multiplier: number = 2): number {
  // Single-line comment explaining the logic
  return value * multiplier;
}

/*
 * Multi-line block comment
 * Used for longer explanations that span multiple lines
 * Useful for documenting complex algorithms or business logic
 */
const processData = (data: string[]): string[] => {
  return data
    .filter(item => item.length > 0) // Inline comment explaining this line
    .map(item => item.toLowerCase()) // Convert to lowercase
    .sort(); // Sort alphabetically
};

const Comments = () => {
  // Variable declarations with explanatory comments
  const numbers = [1, 2, 3, 4, 5]; // Sample data array
  const multiplier = 3; // Multiplication factor

  /* 
   * Processing section
   * Here we demonstrate different calculation methods
   */
  const results = numbers.map(num => calculateValue(num, multiplier));
  const words = ['Hello', 'World', 'Comments', 'Demo'];
  const processedWords = processData(words);

  // TODO: Add more comment examples in future versions
  // FIXME: Consider optimizing the calculation function
  // NOTE: This demonstrates various commenting styles

  return (
    <View style={styles.container}>
      {/* JSX comment - only visible in code, not rendered */}
      
      <View style={styles.section}>
        <Text style={styles.title}>Comment Types Demonstrated</Text>
        
        {/* Single-line comment examples */}
        <Text style={styles.example}>Original: [{numbers.join(', ')}]</Text>
        <Text style={styles.example}>Multiplied by {multiplier}: [{results.join(', ')}]</Text>
        
        {/* Multi-line comment examples */}
        <Text style={styles.example}>Words: [{words.join(', ')}]</Text>
        <Text style={styles.example}>Processed: [{processedWords.join(', ')}]</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Commenting Best Practices</Text>
        <Text style={styles.note}>// Single-line: Quick explanations</Text>
        <Text style={styles.note}>/* Block */: Multi-line descriptions</Text>
        <Text style={styles.note}>/** JSDoc */: Function documentation</Text>
        <Text style={styles.note}>{`{/* JSX */}: React component comments`}</Text>
        <Text style={styles.note}>// TODO: Future improvements</Text>
        <Text style={styles.note}>// FIXME: Known issues to address</Text>
      </View>

      {/* 
        Performance consideration:
        Comments are stripped during compilation and don't affect runtime performance
      */}
      
      <View style={styles.section}>
        <Text style={styles.title}>Usage Guidelines</Text>
        <Text style={styles.guideline}>✓ Explain WHY, not WHAT</Text>
        <Text style={styles.guideline}>✓ Document complex business logic</Text>
        <Text style={styles.guideline}>✓ Use TODO/FIXME for future work</Text>
        <Text style={styles.guideline}>✓ Keep comments up-to-date with code</Text>
        <Text style={styles.guideline}>✗ Avoid obvious comments</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  section: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  example: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    fontFamily: 'monospace',
  },
  note: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
    fontFamily: 'monospace',
  },
  guideline: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
});

export default Comments;