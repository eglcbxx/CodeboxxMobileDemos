/*
Exception Handling Demo
----------------------
This demo shows how to use the ExceptionHandling concept component to illustrate try/catch/finally and error handling in code.

Usage Steps:
1. Import the ExceptionHandling concept component:
   import ExceptionHandling from '@/concepts/ExceptionHandling';

2. Use the component in your JSX:
   <ExceptionHandling />

Details:
- This component demonstrates how to handle exceptions and errors in JavaScript/TypeScript.
- It is intended for educational purposes and can be used in any screen or demo to show error handling patterns.

To use ExceptionHandling in another component, import it and render it directly.
*/

import ExceptionHandling from '@/concepts/ExceptionHandling';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function ExceptionHandlingDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Exception Handling Demo</Text>
      <ExceptionHandling />
    </ScrollView>
  );
}
