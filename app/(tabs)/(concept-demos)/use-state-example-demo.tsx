/*
useState Example Demo
---------------------
This demo shows how to use the UseStateExample concept component to illustrate the useState hook in React.

Usage Steps:
1. Import the UseStateExample concept component:
   import UseStateExample from '@/concepts/UseStateExample';

2. Use the component in your JSX:
   <UseStateExample />

Details:
- This component demonstrates how to use useState for managing state in functional components.
- It is intended for educational purposes and can be used in any screen or demo to show state management in React.

To use UseStateExample in another component, import it and render it directly.
*/

import UseStateExample from '@/concepts/UseStateExample';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function UseStateExampleDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>useState Example Demo</Text>
      <UseStateExample />
    </ScrollView>
  );
}
