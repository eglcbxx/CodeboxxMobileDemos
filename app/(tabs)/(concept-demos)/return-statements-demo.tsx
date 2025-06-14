/*
Return Statements Demo
---------------------
This demo shows how to use the ReturnStatements concept component to illustrate the use of return statements in functions.

Usage Steps:
1. Import the ReturnStatements concept component:
   import ReturnStatements from '@/concepts/ReturnStatements';

2. Use the component in your JSX:
   <ReturnStatements />

Details:
- This component demonstrates how return statements work in functions and what they return.
- It is intended for educational purposes and can be used in any screen or demo to show function output and flow control.

To use ReturnStatements in another component, import it and render it directly.
*/

import ReturnStatements from '@/concepts/ReturnStatements';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function ReturnStatementsDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Return Statements Demo</Text>
      <ReturnStatements />
    </ScrollView>
  );
}
