/*
Avatar Demo
-----------
This demo shows how to use the Avatar component to display user images or initials.

Usage Steps:
1. Import the Avatar component:
   import Avatar from '@/components/Avatar';

2. Use the component in your JSX:
   <Avatar initials="AB" />
   <Avatar uri="https://i.pravatar.cc/100" size={48} />
   <Avatar initials="CD" size={64} />

Props:
- uri?: string – The image URL for the avatar.
- initials?: string – Fallback initials if no image is provided.
- size?: number (default: 40) – The size of the avatar in pixels.

To use Avatar in another component, import it and provide either a uri or initials, and optionally a size.
*/

import Avatar from '@/components/Avatar';
import { ScrollView, View } from 'react-native';

export default function AvatarDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginVertical: 16 }}>
        <Avatar initials="AB" />
        <Avatar uri="https://i.pravatar.cc/100" size={48} />
        <Avatar initials="CD" size={64} />
      </View>
    </ScrollView>
  );
}