/*
AlertBox Demo
-------------
This demo shows how to use the AlertBox component for displaying different types of alerts.

Usage Steps:
1. Import the AlertBox component:
   import AlertBox from '@/components/AlertBox';

2. Use the component in your JSX:
   <AlertBox message="This is an info alert!" type="info" />
   <AlertBox message="Success!" type="success" />
   <AlertBox message="Error!" type="error" />
   <AlertBox message="Warning!" type="warning" onClose={() => {}} />

Props:
- message: string (required) – The alert message to display.
- type?: 'success' | 'error' | 'info' | 'warning' (optional, default: 'info') – The type of alert.
- onClose?: () => void (optional) – Callback when the alert is dismissed.

To use AlertBox in another component, import it and provide the required props as shown above.
*/

import AlertBox from '@/components/AlertBox';
import { ScrollView } from 'react-native';

export default function AlertBoxDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <AlertBox message="This is an info alert!" type="info" />
      <AlertBox message="Success!" type="success" />
      <AlertBox message="Error!" type="error" />
      <AlertBox message="Warning!" type="warning" onClose={() => {}} />
    </ScrollView>
  );
}