/*
Function Calls Demo
-------------------
This demo shows how to use the FunctionCalls concept component to illustrate calling functions in JavaScript/TypeScript.

Usage Steps:
1. Import the FunctionCalls concept component:
   import FunctionCalls from '@/concepts/FunctionCalls';

2. Use the component in your JSX:
   <FunctionCalls />

Details:
- This component demonstrates how to define and call functions, pass arguments, and handle return values.
- It is intended for educational purposes and can be used in any screen or demo to show function invocation.

To use FunctionCalls in another component, import it and render it directly.
*/

import FunctionCalls from '@/concepts/FunctionCalls';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function FunctionCallsDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Function Calls Demo</Text>
      <FunctionCalls />
    </ScrollView>
  );
}
