/*
Asynchronous Constructs Demo
---------------------------
This demo shows how to use the AsynchronousConstructs concept component to illustrate async/await, promises, and other asynchronous patterns in JavaScript/TypeScript.

Usage Steps:
1. Import the AsynchronousConstructs concept component:
   import AsynchronousConstructs from '@/concepts/AsynchronousConstructs';

2. Use the component in your JSX:
   <AsynchronousConstructs />

Details:
- This component demonstrates asynchronous programming concepts such as promises, async/await, and callbacks.
- It is intended for educational purposes and can be used in any screen or demo to show async code patterns.

To use AsynchronousConstructs in another component, import it and render it directly.
*/

import AsynchronousConstructs from '@/concepts/AsynchronousConstructs';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function AsynchronousConstructsDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Asynchronous Constructs Demo</Text>
      <AsynchronousConstructs />
    </ScrollView>
  );
}
