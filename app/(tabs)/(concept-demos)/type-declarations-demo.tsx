/*
Type Declarations Demo
---------------------
This demo shows how to use the TypeDeclarations concept component to illustrate type annotations and declarations in TypeScript.

Usage Steps:
1. Import the TypeDeclarations concept component:
   import TypeDeclarations from '@/concepts/TypeDeclarations';

2. Use the component in your JSX:
   <TypeDeclarations />

Details:
- This component demonstrates how to declare types for variables, functions, and objects.
- It is intended for educational purposes and can be used in any screen or demo to show type safety and usage.

To use TypeDeclarations in another component, import it and render it directly.
*/

import TypeDeclarations from '@/concepts/TypeDeclarations';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function TypeDeclarationsDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Type Declarations Demo</Text>
      <TypeDeclarations />
    </ScrollView>
  );
}
