/*
Classes and Objects Demo
-----------------------
This demo shows how to use the ClassesAndObjects concept component to illustrate object-oriented programming with classes and objects.

Usage Steps:
1. Import the ClassesAndObjects concept component:
   import ClassesAndObjects from '@/concepts/ClassesAndObjects';

2. Use the component in your JSX:
   <ClassesAndObjects />

Details:
- This component demonstrates class definitions, object instantiation, and OOP principles.
- It is intended for educational purposes and can be used in any screen or demo to show OOP basics.

To use ClassesAndObjects in another component, import it and render it directly.
*/

import ClassesAndObjects from '@/concepts/ClassesAndObjects';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function ClassesAndObjectsDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Classes and Objects Demo</Text>
      <ClassesAndObjects />
    </ScrollView>
  );
}
