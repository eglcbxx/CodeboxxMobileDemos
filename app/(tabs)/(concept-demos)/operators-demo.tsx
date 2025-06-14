/*
Operators Demo
--------------
This demo shows how to use the Operators concept component to illustrate arithmetic, logical, comparison, and other operators in JavaScript/TypeScript.

Usage Steps:
1. Import the Operators concept component:
   import Operators from '@/concepts/Operators';

2. Use the component in your JSX:
   <Operators />

Details:
- This component demonstrates different operator types and their usage in expressions.
- It is intended for educational purposes and can be used in any screen or demo to show operator behavior.

To use Operators in another component, import it and render it directly.
*/

import Operators from '@/concepts/Operators';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function OperatorsDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Operators Demo</Text>
      <Operators />
    </ScrollView>
  );
}
