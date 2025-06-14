/*
Access Modifiers Demo
---------------------
This demo shows how to use the AccessModifiers concept component to illustrate public, private, and protected members in classes.

Usage Steps:
1. Import the AccessModifiers concept component:
   import AccessModifiers from '@/concepts/AccessModifiers';

2. Use the component in your JSX:
   <AccessModifiers />

Details:
- This component demonstrates how access modifiers work in TypeScript/JavaScript classes.
- It is intended for educational purposes and can be used in any screen or demo to show access control in OOP.

To use AccessModifiers in another component, import it and render it directly.
*/

import AccessModifiers from '@/concepts/AccessModifiers';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function AccessModifiersDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Access Modifiers Demo</Text>
      <AccessModifiers />
    </ScrollView>
  );
}
