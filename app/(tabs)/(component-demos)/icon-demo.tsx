/*
Icon Demo
---------
Demonstrates the Icon component displaying simple text-based icon placeholders.

Copy-paste instructions:
1. Copy the Icon.tsx file to your components folder
2. Import: import Icon from './components/Icon';
3. Use with name prop and optional size/color customization
Note: This is a basic demo - consider using proper icon libraries for production apps.
*/

import Icon from '@/components/Icon';
import { ScrollView, View } from 'react-native';

export default function IconDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginVertical: 16 }}>
        <Icon name="home" />
        <Icon name="user" size={32} color="#007bff" />
        <Icon name="settings" size={28} color="#28a745" />
        <Icon name="star" size={36} color="#ffc107" />
        <Icon name="heart" size={32} color="#dc3545" />
        <Icon name="search" size={24} color="#6c757d" />
      </View>
    </ScrollView>
  );
}
