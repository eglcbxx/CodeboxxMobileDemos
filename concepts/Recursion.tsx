/*
Recursion
---------
Recursive function patterns for solving problems by breaking them into smaller subproblems.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding recursive algorithms and problem-solving techniques.
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Basic recursion - factorial
function factorial(n: number): number {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}

// Fibonacci sequence
function fibonacci(n: number): number {
  if (n <= 1) return n; // Base cases: fib(0)=0, fib(1)=1
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

// Optimized fibonacci with memoization
function fibonacciMemo(n: number, memo: Record<number, number> = {}): number {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

// Tree traversal - sum all values in nested object
function sumNestedNumbers(obj: any): number {
  let sum = 0;
  
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'number') {
      sum += value;
    } else if (typeof value === 'object' && value !== null) {
      sum += sumNestedNumbers(value); // Recursive call
    }
  }
  
  return sum;
}

// Array flattening
function flattenArray(arr: any[]): any[] {
  const result: any[] = [];
  
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item)); // Recursive call
    } else {
      result.push(item);
    }
  }
  
  return result;
}

// String reversal
function reverseString(str: string): string {
  if (str.length <= 1) return str; // Base case
  return reverseString(str.slice(1)) + str[0]; // Recursive case
}

// Binary search (recursive implementation)
function binarySearch(arr: number[], target: number, left: number = 0, right: number = arr.length - 1): number {
  if (left > right) return -1; // Base case: not found
  
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) return mid; // Base case: found
  if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1); // Search left half
  return binarySearch(arr, target, mid + 1, right); // Search right half
}

// Power calculation
function power(base: number, exponent: number): number {
  if (exponent === 0) return 1; // Base case
  if (exponent < 0) return 1 / power(base, -exponent); // Handle negative exponents
  if (exponent % 2 === 0) {
    const half = power(base, exponent / 2);
    return half * half; // Optimization for even exponents
  }
  return base * power(base, exponent - 1); // Odd exponents
}

const Recursion = () => {
  // Test recursion examples
  const fact5 = factorial(5);
  const fib7 = fibonacci(7);
  const fibMemo10 = fibonacciMemo(10);
  
  const nestedObj = {
    a: 10,
    b: {
      c: 20,
      d: {
        e: 30,
        f: 40
      }
    },
    g: 50
  };
  const nestedSum = sumNestedNumbers(nestedObj);
  
  const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
  const flattened = flattenArray(nestedArray);
  
  const reversed = reverseString('recursion');
  
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
  const searchResult = binarySearch(sortedArray, 9);
  
  const powerResult = power(2, 8);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Mathematical Recursion</Text>
        <Text style={styles.example}>factorial(5) = {fact5}</Text>
        <Text style={styles.example}>fibonacci(7) = {fib7}</Text>
        <Text style={styles.example}>fibonacciMemo(10) = {fibMemo10}</Text>
        <Text style={styles.example}>power(2, 8) = {powerResult}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Data Structure Recursion</Text>
        <Text style={styles.example}>Nested sum: {nestedSum}</Text>
        <Text style={styles.example}>Original: [1, [2, 3], [4, [5, 6]], 7]</Text>
        <Text style={styles.example}>Flattened: [{flattened.join(', ')}]</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>String & Search Recursion</Text>
        <Text style={styles.example}>reverse('recursion') = '{reversed}'</Text>
        <Text style={styles.example}>binarySearch([1,3,5,7,9,11,13,15], 9) = index {searchResult}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Recursion Principles</Text>
        <Text style={styles.note}>✓ Base case: Condition to stop recursion</Text>
        <Text style={styles.note}>✓ Recursive case: Function calls itself</Text>
        <Text style={styles.note}>✓ Progress: Each call moves toward base case</Text>
        <Text style={styles.note}>✓ Memoization: Cache results for optimization</Text>
        <Text style={styles.note}>✓ Stack overflow: Be careful with deep recursion</Text>
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
  },
});

export default Recursion;