/*
Functions and Methods
---------------------
Demonstrates function declarations, arrow functions, and method definitions in TypeScript.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding function syntax, parameters, return values, and method usage.
*/

import React from 'react';
import { Text, View } from 'react-native';

// Regular function declaration
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Function with optional parameter
const formatName = (first: string, last?: string): string => {
  return last ? `${first} ${last}` : first;
};

const FunctionsAndMethods = () => {
  // Object with methods
  const calculator = {
    add: (x: number, y: number): number => x + y,
    subtract: (x: number, y: number): number => x - y
  };

  return (
    <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Functions and Methods Examples
      </Text>
      <Text>Regular function: {greet('TypeScript')}</Text>
      <Text>Arrow function: {multiply(6, 7)}</Text>
      <Text>Optional parameter: {formatName('John', 'Doe')}</Text>
      <Text>Method call: {calculator.add(10, 5)}</Text>
      <Text>Another method: {calculator.subtract(20, 8)}</Text>
    </View>
  );
};

export default FunctionsAndMethods;