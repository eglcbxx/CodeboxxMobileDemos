/*
Break and Continue Demo
----------------------
This demo shows how to use the BreakContinue concept component to illustrate the use of break and continue statements in loops.

Usage Steps:
1. Import the BreakContinue concept component:
   import BreakContinue from '@/concepts/BreakContinue';

2. Use the component in your JSX:
   <BreakContinue />

Details:
- This component demonstrates how break and continue work in for/while loops.
- It is intended for educational purposes and can be used in any screen or demo to show loop control flow.

To use BreakContinue in another component, import it and render it directly.
*/

import BreakContinue from '@/concepts/BreakContinue';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function BreakContinueDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Break and Continue Demo</Text>
      <BreakContinue />
    </ScrollView>
  );
}
