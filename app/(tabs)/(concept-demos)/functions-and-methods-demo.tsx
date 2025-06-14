import FunctionsAndMethods from '@/concepts/FunctionsAndMethods';
import React from 'react';
import { ScrollView, Text } from 'react-native';

/*
Functions and Methods Demo
-------------------------
This demo shows how to use the FunctionsAndMethods concept component to illustrate the difference between functions and methods in JavaScript/TypeScript.

Usage Steps:
1. Import the FunctionsAndMethods concept component:
   import FunctionsAndMethods from '@/concepts/FunctionsAndMethods';

2. Use the component in your JSX:
   <FunctionsAndMethods />

Details:
- This component demonstrates standalone functions, class methods, and their usage.
- It is intended for educational purposes and can be used in any screen or demo to show function/method syntax and invocation.

To use FunctionsAndMethods in another component, import it and render it directly.
*/

export default function FunctionsAndMethodsDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Functions and Methods Demo</Text>
      <FunctionsAndMethods />
    </ScrollView>
  );
}
