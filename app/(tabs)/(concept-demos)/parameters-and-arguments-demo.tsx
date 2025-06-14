/*
Parameters and Arguments Demo
----------------------------
This demo shows how to use the ParametersAndArguments concept component to illustrate function parameters and arguments in JavaScript/TypeScript.

Usage Steps:
1. Import the ParametersAndArguments concept component:
   import ParametersAndArguments from '@/concepts/ParametersAndArguments';

2. Use the component in your JSX:
   <ParametersAndArguments />

Details:
- This component demonstrates how to define and use parameters and arguments in functions.
- It is intended for educational purposes and can be used in any screen or demo to show function signatures and calls.

To use ParametersAndArguments in another component, import it and render it directly.
*/

import ParametersAndArguments from '@/concepts/ParametersAndArguments';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function ParametersAndArgumentsDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Parameters and Arguments Demo</Text>
      <ParametersAndArguments />
    </ScrollView>
  );
}
