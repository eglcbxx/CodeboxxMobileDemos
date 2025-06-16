/*
Avatar Demo
-----------
Demonstrates the Avatar component showing both image and initials variants in different sizes.

Copy-paste instructions:
1. Copy the Avatar.tsx file to your components folder
2. Import: import Avatar from './components/Avatar';
3. Use with uri (for images) or initials (for text fallback) and optional size prop
*/

import Avatar from '@/components/Avatar';
import { ScrollView, View } from 'react-native';

export default function AvatarDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginVertical: 16 }}>
        <Avatar initials="JD" />
        <Avatar uri="https://i.pravatar.cc/100" size={48} />
        <Avatar initials="AB" size={64} />
        <Avatar uri="https://i.pravatar.cc/150" size={80} />
      </View>
    </ScrollView>
  );
}