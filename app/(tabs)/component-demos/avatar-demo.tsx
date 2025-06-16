/*
Avatar Demo
===========

What this demo shows:
This demo displays circular avatar images that can show either a person's photo or their initials in different sizes.

What component you need:
You need the Avatar component from: /components/Avatar.tsx

How to copy and use in your project:
1. Copy the Avatar.tsx file to your components folder
2. Copy the import line below: import Avatar from '@/components/Avatar';
3. Copy any of the Avatar examples below and paste them in your screen

Code examples to copy:
*/

import Avatar from '@/components/Avatar';
import { ScrollView, View } from 'react-native';

export default function AvatarDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginVertical: 16 }}>
        {/* Avatar with initials - copy this line */}
        <Avatar initials="JD" />
        
        {/* Small avatar with image - copy this line */}
        <Avatar uri="https://i.pravatar.cc/100" size={48} />
        
        {/* Medium avatar with initials - copy this line */}
        <Avatar initials="AB" size={64} />
        
        {/* Large avatar with image - copy this line */}
        <Avatar uri="https://i.pravatar.cc/150" size={80} />
      </View>
    </ScrollView>
  );
}