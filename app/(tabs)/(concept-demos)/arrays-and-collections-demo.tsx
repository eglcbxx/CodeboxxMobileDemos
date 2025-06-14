/*
Arrays and Collections Demo
--------------------------
This demo shows how to use the ArraysAndCollections concept component to illustrate array and collection operations in JavaScript/TypeScript.

Usage Steps:
1. Import the ArraysAndCollections concept component:
   import ArraysAndCollections from '@/concepts/ArraysAndCollections';

2. Use the component in your JSX:
   <ArraysAndCollections />

Details:
- This component demonstrates how to work with arrays and collections (such as maps, sets) in code.
- It is intended for educational purposes and can be used in any screen or demo to show collection manipulation.

To use ArraysAndCollections in another component, import it and render it directly.
*/

import ArraysAndCollections from '@/concepts/ArraysAndCollections';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function ArraysAndCollectionsDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Arrays and Collections Demo</Text>
      <ArraysAndCollections />
    </ScrollView>
  );
}
