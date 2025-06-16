/*
Function Calls
--------------
Function invocation patterns, argument passing, and return value handling in JavaScript/TypeScript.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding different ways to call functions and handle their results.
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Basic function definition
function add(a: number, b: number): number {
  return a + b;
}

// Function with optional parameters
function greet(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}!`;
}

// Function with rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Higher-order function (takes function as parameter)
function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
  return operation(a, b);
}

// Function that returns a function
function createMultiplier(factor: number): (value: number) => number {
  return (value: number) => value * factor;
}

// Callback function example
function processArray(arr: number[], callback: (item: number) => number): number[] {
  return arr.map(callback);
}

// Async function
async function fetchData(delay: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data fetched after ${delay}ms`);
    }, delay);
  });
}

const FunctionCalls = () => {
  // Basic function calls
  const addResult = add(5, 3);
  const defaultGreeting = greet('Alice');
  const customGreeting = greet('Bob', 'Hi');

  // Rest parameters
  const sumResult = sum(1, 2, 3, 4, 5);

  // Arrow function call
  const multiplyResult = multiply(4, 7);

  // Higher-order function calls
  const operationResult1 = applyOperation(10, 5, add);
  const operationResult2 = applyOperation(10, 5, multiply);

  // Function factory
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  const doubleResult = double(8);
  const tripleResult = triple(8);

  // Callback function usage
  const numbers = [1, 2, 3, 4];
  const doubled = processArray(numbers, (x) => x * 2);
  const squared = processArray(numbers, (x) => x * x);

  // Method calls on objects
  const calculator = {
    value: 0,
    add(n: number) { this.value += n; return this; },
    multiply(n: number) { this.value *= n; return this; },
    getValue() { return this.value; }
  };
  
  const chainedResult = calculator.add(5).multiply(3).getValue();

  // Function call with destructuring
  const getCoordinates = (): [number, number] => [10, 20];
  const [x, y] = getCoordinates();

  // Async function call (in real use, you'd use useEffect or handle promises properly)
  const [asyncData, setAsyncData] = React.useState<string>('Loading...');
  React.useEffect(() => {
    fetchData(100).then(setAsyncData);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Basic Function Calls</Text>
        <Text style={styles.example}>add(5, 3) = {addResult}</Text>
        <Text style={styles.example}>greet('Alice') = {defaultGreeting}</Text>
        <Text style={styles.example}>greet('Bob', 'Hi') = {customGreeting}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Advanced Function Calls</Text>
        <Text style={styles.example}>sum(1,2,3,4,5) = {sumResult}</Text>
        <Text style={styles.example}>multiply(4, 7) = {multiplyResult}</Text>
        <Text style={styles.example}>applyOperation(10, 5, add) = {operationResult1}</Text>
        <Text style={styles.example}>applyOperation(10, 5, multiply) = {operationResult2}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Function Factories & Callbacks</Text>
        <Text style={styles.example}>double(8) = {doubleResult}</Text>
        <Text style={styles.example}>triple(8) = {tripleResult}</Text>
        <Text style={styles.example}>doubled array: [{doubled.join(', ')}]</Text>
        <Text style={styles.example}>squared array: [{squared.join(', ')}]</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Method Chaining & Destructuring</Text>
        <Text style={styles.example}>chained operations: {chainedResult}</Text>
        <Text style={styles.example}>coordinates: x={x}, y={y}</Text>
        <Text style={styles.example}>async result: {asyncData}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Call Patterns</Text>
        <Text style={styles.note}>✓ Regular calls: func(args)</Text>
        <Text style={styles.note}>✓ Method calls: obj.method(args)</Text>
        <Text style={styles.note}>✓ Chained calls: obj.method1().method2()</Text>
        <Text style={styles.note}>✓ Callback calls: func(data, callback)</Text>
        <Text style={styles.note}>✓ Higher-order: func(args, otherFunc)</Text>
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

export default FunctionCalls;