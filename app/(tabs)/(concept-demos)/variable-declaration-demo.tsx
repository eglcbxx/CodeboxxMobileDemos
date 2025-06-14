/*
Variable Declaration Demo
------------------------
This demo shows how to use the VariableDeclaration concept component to illustrate variable declaration and assignment in JavaScript/TypeScript.

Usage Steps:
1. Import the VariableDeclaration concept component:
   import VariableDeclaration from '@/concepts/VariableDeclaration';

2. Use the component in your JSX:
   <VariableDeclaration />

Details:
- This component demonstrates how to declare variables using let, const, and var, and assign values.
- It is intended for educational purposes and can be used in any screen or demo to show variable usage.

To use VariableDeclaration in another component, import it and render it directly.
*/

import VariableDeclaration from '@/concepts/VariableDeclaration';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function VariableDeclarationDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Variable Declaration Demo</Text>
      <VariableDeclaration />
    </ScrollView>
  );
}
