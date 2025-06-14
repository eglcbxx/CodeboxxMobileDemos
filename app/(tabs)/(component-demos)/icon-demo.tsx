/*
Icon Demo
---------
This demo shows how to use the Icon component to display simple icons by name.

Usage Steps:
1. Import the Icon component:
   import Icon from '@/components/Icon';

2. Use the component in your JSX:
   <Icon name="star" size={32} color="#FFD700" />
   <Icon name="heart" size={32} color="#FF0000" />

Props:
- name: string (required) – The icon name to display.
- size?: number (default: 24) – The icon size in pixels.
- color?: string (default: #000) – The icon color.

To use Icon in another component, import it and provide the required name, and optionally size and color.
*/

import Icon from '@/components/Icon';
import { ScrollView, View } from 'react-native';

export default function IconDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginVertical: 16 }}>
        <Icon name="star" size={32} color="#FFD700" />
        <Icon name="heart" size={32} color="#FF0000" />
      </View>
    </ScrollView>
  );
}
