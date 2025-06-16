/*
Parameters and Arguments
------------------------
Function parameter types, default values, optional parameters, and argument handling.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding function signatures and parameter patterns.
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Basic parameters and arguments
function greet(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old.`;
}

// Optional parameters (must come after required parameters)
function formatMessage(message: string, prefix?: string, suffix?: string): string {
  const pre = prefix || '';
  const suf = suffix || '';
  return `${pre}${message}${suf}`;
}

// Default parameters
function calculateTax(amount: number, rate: number = 0.08): number {
  return amount * rate;
}

// Rest parameters (variable number of arguments)
function sumAll(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Object parameters with destructuring
interface UserParams {
  name: string;
  email: string;
  age?: number;
  isActive?: boolean;
}

function createUser({ name, email, age = 18, isActive = true }: UserParams): string {
  return `User: ${name} (${email}), Age: ${age}, Active: ${isActive}`;
}

// Function with callback parameter
function processData(data: string[], callback: (item: string) => string): string[] {
  return data.map(callback);
}

// Higher-order function parameters
type Operation = (a: number, b: number) => number;

function calculator(op: Operation, x: number, y: number): number {
  return op(x, y);
}

// Generic function parameters
function identity<T>(arg: T): T {
  return arg;
}

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const ParametersAndArguments = () => {
  // Basic function calls with arguments
  const greeting = greet('Alice', 25);
  
  // Optional parameters - can omit some arguments
  const msg1 = formatMessage('Hello World');
  const msg2 = formatMessage('Hello World', '>>> ');
  const msg3 = formatMessage('Hello World', '>>> ', ' <<<');
  
  // Default parameters
  const tax1 = calculateTax(100); // Uses default rate
  const tax2 = calculateTax(100, 0.15); // Custom rate
  
  // Rest parameters - variable arguments
  const sum1 = sumAll(1, 2, 3);
  const sum2 = sumAll(10, 20, 30, 40, 50);
  
  // Object parameters
  const user1 = createUser({ name: 'John', email: 'john@email.com' });
  const user2 = createUser({ 
    name: 'Jane', 
    email: 'jane@email.com', 
    age: 30, 
    isActive: false 
  });
  
  // Callback function as argument
  const data = ['hello', 'world', 'typescript'];
  const uppercased = processData(data, (item) => item.toUpperCase());
  const prefixed = processData(data, (item) => `>>> ${item}`);
  
  // Higher-order function arguments
  const add = (a: number, b: number) => a + b;
  const multiply = (a: number, b: number) => a * b;
  const addResult = calculator(add, 10, 5);
  const multiplyResult = calculator(multiply, 10, 5);
  
  // Generic function arguments
  const stringId = identity('hello');
  const numberPair = pair(42, 'answer');

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Basic Parameters</Text>
        <Text style={styles.example}>greet('Alice', 25): {greeting}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Optional & Default Parameters</Text>
        <Text style={styles.example}>formatMessage('Hello World'): {msg1}</Text>
        <Text style={styles.example}>with prefix: {msg2}</Text>
        <Text style={styles.example}>with both: {msg3}</Text>
        <Text style={styles.example}>Default tax (8%): ${tax1.toFixed(2)}</Text>
        <Text style={styles.example}>Custom tax (15%): ${tax2.toFixed(2)}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Rest Parameters</Text>
        <Text style={styles.example}>sumAll(1,2,3): {sum1}</Text>
        <Text style={styles.example}>sumAll(10,20,30,40,50): {sum2}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Object Parameters</Text>
        <Text style={styles.example}>{user1}</Text>
        <Text style={styles.example}>{user2}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Function Parameters</Text>
        <Text style={styles.example}>Uppercased: [{uppercased.join(', ')}]</Text>
        <Text style={styles.example}>Prefixed: [{prefixed.join(', ')}]</Text>
        <Text style={styles.example}>calculator(add, 10, 5): {addResult}</Text>
        <Text style={styles.example}>calculator(multiply, 10, 5): {multiplyResult}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Generic Parameters</Text>
        <Text style={styles.example}>identity('hello'): {stringId}</Text>
        <Text style={styles.example}>pair(42, 'answer'): [{numberPair.join(', ')}]</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Parameter Types</Text>
        <Text style={styles.note}>✓ Required: function(param: type)</Text>
        <Text style={styles.note}>✓ Optional: function(param?: type)</Text>
        <Text style={styles.note}>✓ Default: function(param: type = value)</Text>
        <Text style={styles.note}>✓ Rest: function(...params: type[])</Text>
        <Text style={styles.note}>✓ Object: function({'{param1, param2}'})</Text>
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

export default ParametersAndArguments;