/*
Badge Demo
----------
This demo shows how to use the Badge component to display status or notification labels.

Usage Steps:
1. Import the Badge component:
   import Badge from '@/components/Badge';

2. Use the component in your JSX:
   <Badge label="Default" />
   <Badge label="Success" backgroundColor="#28a745" color="#fff" />
   <Badge label="Warning" backgroundColor="#ffc107" color="#000" />
   <Badge label="Error" backgroundColor="#dc3545" color="#fff" />

Props:
- label: string (required) – The text to display inside the badge.
- color?: string (default: #fff) – The text color.
- backgroundColor?: string (default: #007bff) – The badge background color.

To use Badge in another component, import it and provide the required label and any optional styling props.
*/

import Badge from '@/components/Badge';
import { ScrollView, View } from 'react-native';

export default function BadgeDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginVertical: 16 }}>
        <Badge label="Default" />
        <Badge label="Success" backgroundColor="#28a745" color="#fff" />
        <Badge label="Warning" backgroundColor="#ffc107" color="#000" />
        <Badge label="Error" backgroundColor="#dc3545" color="#fff" />
      </View>
    </ScrollView>
  );
}