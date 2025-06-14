/*
Fetch Example Demo
------------------
This demo shows how to use the FetchExample concept component to illustrate making HTTP requests with fetch in JavaScript/TypeScript.

Usage Steps:
1. Import the FetchExample concept component:
   import FetchExample from '@/concepts/FetchExample';

2. Use the component in your JSX:
   <FetchExample />

Details:
- This component demonstrates how to perform GET/POST requests and handle responses/errors using fetch.
- It is intended for educational purposes and can be used in any screen or demo to show API calls.

To use FetchExample in another component, import it and render it directly.
*/

import FetchExample from '@/concepts/FetchExample';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function FetchExampleDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Fetch Example Demo</Text>
      <FetchExample />
    </ScrollView>
  );
}
