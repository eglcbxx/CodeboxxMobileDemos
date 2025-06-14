/*
Recursion Demo
--------------
This demo shows how to use the Recursion concept component to illustrate recursive functions in JavaScript/TypeScript.

Usage Steps:
1. Import the Recursion concept component:
   import Recursion from '@/concepts/Recursion';

2. Use the component in your JSX:
   <Recursion />

Details:
- This component demonstrates how recursion works and provides examples of recursive algorithms.
- It is intended for educational purposes and can be used in any screen or demo to show recursion patterns.

To use Recursion in another component, import it and render it directly.
*/

import Recursion from '@/concepts/Recursion';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function RecursionDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Recursion Demo</Text>
      <Recursion />
    </ScrollView>
  );
}
