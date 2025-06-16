/*
Badge Demo
==========

What this demo shows:
This demo displays small colored labels (badges) that can be used to show status, categories, or notifications.

What component you need:
You need the Badge component from: /components/Badge.tsx

How to copy and use in your project:
1. Copy the Badge.tsx file to your components folder
2. Copy the import line below: import Badge from '@/components/Badge';
3. Copy any of the Badge examples below and paste them in your screen

Code examples to copy:
*/

import Badge from '@/components/Badge';
import { ScrollView, View } from 'react-native';

export default function BadgeDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginVertical: 16 }}>
        {/* Default gray badge - copy this line */}
        <Badge label="Default" />
        
        {/* Green success badge - copy this line */}
        <Badge label="Success" backgroundColor="#28a745" />
        
        {/* Yellow warning badge - copy this line */}
        <Badge label="Warning" backgroundColor="#ffc107" color="#000" />
        
        {/* Red error badge - copy this line */}
        <Badge label="Error" backgroundColor="#dc3545" />
        
        {/* Blue info badge - copy this line */}
        <Badge label="Info" backgroundColor="#17a2b8" />
        
        {/* Purple new badge - copy this line */}
        <Badge label="New" backgroundColor="#6f42c1" />
      </View>
    </ScrollView>
  );
}