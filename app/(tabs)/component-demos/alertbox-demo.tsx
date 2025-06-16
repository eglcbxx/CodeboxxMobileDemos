/*
AlertBox Demo
=============

What this demo shows:
This demo displays colorful alert boxes that can show different types of messages (info, success, error, warning).

What component you need:
You need the AlertBox component from: /components/AlertBox.tsx

How to copy and use in your project:
1. Copy the AlertBox.tsx file to your components folder
2. Copy the import line below: import AlertBox from '@/components/AlertBox';
3. Copy any of the AlertBox examples below and paste them in your screen

Code examples to copy:
*/

import AlertBox from '@/components/AlertBox';
import { ScrollView } from 'react-native';

export default function AlertBoxDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      {/* Basic info alert - copy this line */}
      <AlertBox message="This is an info alert!" type="info" />
      
      {/* Success alert - copy this line */}
      <AlertBox message="Success message!" type="success" />
      
      {/* Error alert - copy this line */}
      <AlertBox message="Error occurred!" type="error" />
      
      {/* Warning alert with close button - copy this line */}
      <AlertBox message="Warning alert with dismiss" type="warning" onClose={() => alert('Alert dismissed')} />
    </ScrollView>
  );
}