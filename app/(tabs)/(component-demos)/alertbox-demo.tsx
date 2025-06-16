/*
AlertBox Demo
-------------
Demonstrates the AlertBox component showing different alert types and dismiss functionality.

Copy-paste instructions:
1. Copy the AlertBox.tsx file to your components folder
2. Import: import AlertBox from './components/AlertBox';
3. Use as shown below with message, type, and optional onClose props
*/

import AlertBox from '@/components/AlertBox';
import { ScrollView } from 'react-native';

export default function AlertBoxDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <AlertBox message="This is an info alert!" type="info" />
      <AlertBox message="Success message!" type="success" />
      <AlertBox message="Error occurred!" type="error" />
      <AlertBox message="Warning alert with dismiss" type="warning" onClose={() => alert('Alert dismissed')} />
    </ScrollView>
  );
}