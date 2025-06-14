/*
Loops Demo
----------
This demo shows how to use the Loops concept component to illustrate for, while, and do-while loops in JavaScript/TypeScript.

Usage Steps:
1. Import the Loops concept component:
   import Loops from '@/concepts/Loops';

2. Use the component in your JSX:
   <Loops />

Details:
- This component demonstrates different loop constructs and their usage.
- It is intended for educational purposes and can be used in any screen or demo to show iteration patterns.

To use Loops in another component, import it and render it directly.
*/

import Loops from '@/concepts/Loops';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function LoopsDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Loops Demo</Text>
      <Loops />
    </ScrollView>
  );
}
