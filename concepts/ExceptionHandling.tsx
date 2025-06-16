/*
Exception Handling
------------------
Demonstrates try/catch/finally blocks for error handling and recovery patterns.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding error management, graceful failures, and debugging patterns.
*/

import React from 'react';
import { Text, View } from 'react-native';

const ExceptionHandling = () => {
  // Basic try/catch example
  let basicResult = '';
  try {
    throw new Error('Something went wrong!');
  } catch (error: any) {
    basicResult = `Caught: ${error.message}`;
  }

  // Try/catch/finally with cleanup
  let finallyResult = '';
  let hasFinally = false;
  try {
    JSON.parse('{"invalid": json}'); // This will throw
    finallyResult = 'Success';
  } catch {
    finallyResult = 'Parse error handled';
  } finally {
    hasFinally = true;
  }

  // Function with error handling
  const safeDivide = (a: number, b: number): string => {
    try {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return `${a} ÷ ${b} = ${a / b}`;
    } catch (error: any) {
      return `Error: ${error.message}`;
    }
  };

  // Async error handling simulation
  const handleAsyncError = (): string => {
    try {
      // Simulate an error that might occur in async operations
      const response = { ok: false, status: 404 };
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Not Found`);
      }
      return 'Success';
    } catch (error: any) {
      return `Network error: ${error.message}`;
    }
  };

  return (
    <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Exception Handling Examples
      </Text>
      <Text>Basic try/catch: {basicResult}</Text>
      <Text>With finally: {finallyResult}</Text>
      <Text>Finally executed: {hasFinally ? 'Yes' : 'No'}</Text>
      <Text>Safe division: {safeDivide(10, 2)}</Text>
      <Text>Division by zero: {safeDivide(10, 0)}</Text>
      <Text>Async error: {handleAsyncError()}</Text>
    </View>
  );
};

export default ExceptionHandling;