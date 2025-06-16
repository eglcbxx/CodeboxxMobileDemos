/*
Return Statements
-----------------
Function return patterns, early returns, and value handling in JavaScript/TypeScript.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding function output and control flow patterns.
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Basic return statement
function getGreeting(): string {
  return 'Hello from return statement!';
}

// Multiple return paths
function getGrade(score: number): string {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

// Early return for validation
function divide(a: number, b: number): number | string {
  if (b === 0) return 'Cannot divide by zero'; // Early return
  if (typeof a !== 'number' || typeof b !== 'number') return 'Invalid input';
  
  return a / b; // Normal return
}

// Returning objects
function createUser(name: string, age: number): { name: string; age: number; isAdult: boolean } {
  return {
    name,
    age,
    isAdult: age >= 18
  };
}

// Returning arrays
function getCoordinates(): [number, number] {
  return [10, 20];
}

// Conditional returns
function processPayment(amount: number, paymentMethod: string): { success: boolean; message: string } {
  if (amount <= 0) {
    return { success: false, message: 'Invalid amount' };
  }
  
  if (paymentMethod === 'credit') {
    return { success: true, message: 'Credit card payment processed' };
  } else if (paymentMethod === 'cash') {
    return { success: true, message: 'Cash payment received' };
  } else {
    return { success: false, message: 'Unsupported payment method' };
  }
}

// Function returning another function
function createMultiplier(factor: number): (value: number) => number {
  return function(value: number): number {
    return value * factor;
  };
}

// Async function returns (Promise)
async function fetchUserData(id: number): Promise<{ id: number; name: string; email: string }> {
  // Simulating async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`,
        email: `user${id}@example.com`
      });
    }, 100);
  });
}

// Arrow function returns
const add = (a: number, b: number): number => a + b; // Implicit return
const multiply = (a: number, b: number): number => { // Explicit return
  return a * b;
};

// Returning null/undefined
function findUser(id: number): { name: string; id: number } | null {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  
  const user = users.find(u => u.id === id);
  return user || null; // Return null if not found
}

const ReturnStatements = () => {
  // Basic returns
  const greeting = getGreeting();
  const gradeA = getGrade(95);
  const gradeF = getGrade(45);
  
  // Division examples
  const validDivision = divide(10, 2);
  const invalidDivision = divide(10, 0);
  
  // Object and array returns
  const user = createUser('Alice', 25);
  const [x, y] = getCoordinates();
  
  // Payment processing
  const payment1 = processPayment(100, 'credit');
  const payment2 = processPayment(-50, 'cash');
  
  // Function factory
  const double = createMultiplier(2);
  const doubleResult = double(5);
  
  // Arrow function results
  const addResult = add(3, 4);
  const multiplyResult = multiply(3, 4);
  
  // Finding user
  const foundUser = findUser(1);
  const notFoundUser = findUser(99);
  
  // Async result (in real usage, you'd handle this properly with useEffect)
  const [asyncData, setAsyncData] = React.useState<any>(null);
  React.useEffect(() => {
    fetchUserData(1).then(setAsyncData);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Basic Returns</Text>
        <Text style={styles.example}>getGreeting(): {greeting}</Text>
        <Text style={styles.example}>getGrade(95): {gradeA}</Text>
        <Text style={styles.example}>getGrade(45): {gradeF}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Early Returns & Validation</Text>
        <Text style={styles.example}>divide(10, 2): {validDivision}</Text>
        <Text style={styles.example}>divide(10, 0): {invalidDivision}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Object & Array Returns</Text>
        <Text style={styles.example}>User: {user.name}, Age: {user.age}, Adult: {user.isAdult ? 'Yes' : 'No'}</Text>
        <Text style={styles.example}>Coordinates: ({x}, {y})</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Conditional Returns</Text>
        <Text style={styles.example}>Payment 1: {payment1.success ? 'Success' : 'Failed'} - {payment1.message}</Text>
        <Text style={styles.example}>Payment 2: {payment2.success ? 'Success' : 'Failed'} - {payment2.message}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Function & Arrow Returns</Text>
        <Text style={styles.example}>double(5): {doubleResult}</Text>
        <Text style={styles.example}>add(3, 4): {addResult}</Text>
        <Text style={styles.example}>multiply(3, 4): {multiplyResult}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Null Returns & Async</Text>
        <Text style={styles.example}>Found user: {foundUser ? foundUser.name : 'null'}</Text>
        <Text style={styles.example}>Not found: {notFoundUser ? notFoundUser.name : 'null'}</Text>
        <Text style={styles.example}>Async data: {asyncData ? asyncData.name : 'Loading...'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Return Patterns</Text>
        <Text style={styles.note}>✓ Early return: Guard clauses for validation</Text>
        <Text style={styles.note}>✓ Multiple paths: Different returns based on conditions</Text>
        <Text style={styles.note}>✓ Object/Array: Structured data returns</Text>
        <Text style={styles.note}>✓ Function returns: Higher-order function patterns</Text>
        <Text style={styles.note}>✓ Null/undefined: Handling missing data</Text>
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

export default ReturnStatements;