/*
Badge Demo
----------
Demonstrates the Badge component with different colors and styles for various use cases.

Copy-paste instructions:
1. Copy the Badge.tsx file to your components folder
2. Import: import Badge from './components/Badge';
3. Use with label text and optional backgroundColor/color props for customization
*/

import Badge from '@/components/Badge';
import { ScrollView, View } from 'react-native';

export default function BadgeDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginVertical: 16 }}>
        <Badge label="Default" />
        <Badge label="Success" backgroundColor="#28a745" />
        <Badge label="Warning" backgroundColor="#ffc107" color="#000" />
        <Badge label="Error" backgroundColor="#dc3545" />
        <Badge label="Info" backgroundColor="#17a2b8" />
        <Badge label="New" backgroundColor="#6f42c1" />
      </View>
    </ScrollView>
  );
}