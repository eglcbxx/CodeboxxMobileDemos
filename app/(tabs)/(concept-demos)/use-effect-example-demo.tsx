/*
useEffect Example Demo
---------------------
This demo shows how to use the UseEffectExample concept component to illustrate the useEffect hook in React.

Usage Steps:
1. Import the UseEffectExample concept component:
   import UseEffectExample from '@/concepts/UseEffectExample';

2. Use the component in your JSX:
   <UseEffectExample />

Details:
- This component demonstrates how to use useEffect for side effects in functional components.
- It is intended for educational purposes and can be used in any screen or demo to show effect management in React.

To use UseEffectExample in another component, import it and render it directly.
*/

import UseEffectExample from '@/concepts/UseEffectExample';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function UseEffectExampleDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>useEffect Example Demo</Text>
      <UseEffectExample />
    </ScrollView>
  );
}
