/*
Comments Demo
-------------
This demo shows how to use the Comments concept component to illustrate the use of comments in code (single-line, multi-line, and documentation comments).

Usage Steps:
1. Import the Comments concept component:
   import Comments from '@/concepts/Comments';

2. Use the component in your JSX:
   <Comments />

Details:
- This component demonstrates different types of comments and their usage in code.
- It is intended for educational purposes and can be used in any screen or demo to show best practices for code documentation.

To use Comments in another component, import it and render it directly.
*/

import Comments from '@/concepts/Comments';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function CommentsDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Comments Demo</Text>
      <Comments />
    </ScrollView>
  );
}
