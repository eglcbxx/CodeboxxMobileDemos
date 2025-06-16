/*
Icon Demo
=========

What this demo shows:
This demo displays simple text-based icon placeholders in different sizes and colors.

What component you need:
You need the Icon component from: /components/Icon.tsx

How to copy and use in your project:
1. Copy the Icon.tsx file to your components folder
2. Copy the import line below: import Icon from '@/components/Icon';
3. Copy any of the Icon examples below and paste them in your screen
Note: This is a basic demo - consider using proper icon libraries for production apps.

Code examples to copy:
*/

import Icon from '@/components/Icon';
import { ScrollView, View } from 'react-native';

export default function IconDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginVertical: 16 }}>
        {/* Default home icon - copy this line */}
        <Icon name="home" />
        
        {/* Blue user icon - copy this line */}
        <Icon name="user" size={32} color="#007bff" />
        
        {/* Green settings icon - copy this line */}
        <Icon name="settings" size={28} color="#28a745" />
        
        {/* Yellow star icon - copy this line */}
        <Icon name="star" size={36} color="#ffc107" />
        
        {/* Red heart icon - copy this line */}
        <Icon name="heart" size={32} color="#dc3545" />
        
        {/* Gray search icon - copy this line */}
        <Icon name="search" size={24} color="#6c757d" />
      </View>
    </ScrollView>
  );
}
