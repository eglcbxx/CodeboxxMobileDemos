/*
Break and Continue
------------------
Loop control statements for early termination (break) and iteration skipping (continue).

Copy this file to your project's concepts folder and import it where needed.
Perfect for implementing complex loop logic and flow control.
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BreakContinue = () => {
  // Example 1: Break statement - exits loop completely
  const breakExample = () => {
    const results: number[] = [];
    for (let i = 1; i <= 10; i++) {
      if (i === 6) break; // Stop when i reaches 6
      results.push(i);
    }
    return results; // [1, 2, 3, 4, 5]
  };

  // Example 2: Continue statement - skips current iteration
  const continueExample = () => {
    const results: number[] = [];
    for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) continue; // Skip even numbers
      results.push(i);
    }
    return results; // [1, 3, 5, 7, 9]
  };

  // Example 3: Finding first match with break
  const findFirstEven = (numbers: number[]) => {
    for (const num of numbers) {
      if (num % 2 === 0) {
        return num; // Break and return first even number
      }
    }
    return null;
  };

  // Example 4: Processing only valid items with continue
  const processValidItems = (items: (string | null | undefined)[]) => {
    const processed: string[] = [];
    for (const item of items) {
      if (!item || item.length < 3) continue; // Skip invalid items
      processed.push(item.toUpperCase());
    }
    return processed;
  };

  // Example 5: Nested loops with labeled break
  const findInMatrix = () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let found = false;
    let position = '';

    outerLoop: for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 5) {
          position = `Row ${i}, Col ${j}`;
          found = true;
          break outerLoop; // Break out of both loops
        }
      }
    }
    return { found, position };
  };

  const breakResults = breakExample();
  const continueResults = continueExample();
  const firstEven = findFirstEven([1, 3, 7, 8, 9, 12]);
  const validItems = processValidItems(['hi', null, 'hello', 'ok', undefined, 'world']);
  const matrixSearch = findInMatrix();

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Break Statement</Text>
        <Text style={styles.example}>Numbers before 6: [{breakResults.join(', ')}]</Text>
        <Text style={styles.description}>Exits loop completely when condition is met</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Continue Statement</Text>
        <Text style={styles.example}>Odd numbers: [{continueResults.join(', ')}]</Text>
        <Text style={styles.description}>Skips current iteration, continues with next</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Find First Match</Text>
        <Text style={styles.example}>First even number: {firstEven}</Text>
        <Text style={styles.description}>Break immediately when target is found</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Process Valid Items</Text>
        <Text style={styles.example}>Valid items: [{validItems.join(', ')}]</Text>
        <Text style={styles.description}>Continue skips invalid data</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Nested Loop Control</Text>
        <Text style={styles.example}>Found 5 at: {matrixSearch.position}</Text>
        <Text style={styles.description}>Labeled break exits multiple nested loops</Text>
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
  description: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default BreakContinue;