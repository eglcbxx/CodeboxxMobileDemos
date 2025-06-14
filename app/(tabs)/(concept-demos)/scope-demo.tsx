/*
Scope Demo
----------
This demo shows how to use the Scope concept component to illustrate variable/function scope in JavaScript/TypeScript.

Usage Steps:
1. Import the Scope concept component:
   import Scope from '@/concepts/Scope';

2. Use the component in your JSX:
   <Scope />

Details:
- This component demonstrates local, global, and block scope.
- It is intended for educational purposes and can be used in any screen or demo to show scope rules and examples.

To use Scope in another component, import it and render it directly.
*/

import Scope from '@/concepts/Scope';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function ScopeDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Scope Demo</Text>
      <Scope />
    </ScrollView>
  );
}
