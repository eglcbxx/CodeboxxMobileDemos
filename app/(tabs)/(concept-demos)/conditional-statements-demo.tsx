/*
Conditional Statements Demo
--------------------------
This demo shows how to use the ConditionalStatements concept component to illustrate if, else, and switch statements in code.

Usage Steps:
1. Import the ConditionalStatements concept component:
   import ConditionalStatements from '@/concepts/ConditionalStatements';

2. Use the component in your JSX:
   <ConditionalStatements />

Details:
- This component demonstrates conditional logic in TypeScript/JavaScript.
- It is intended for educational purposes and can be used in any screen or demo to show branching logic.

To use ConditionalStatements in another component, import it and render it directly.
*/

import ConditionalStatements from '@/concepts/ConditionalStatements';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function ConditionalStatementsDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Conditional Statements Demo</Text>
      <ConditionalStatements />
    </ScrollView>
  );
}
