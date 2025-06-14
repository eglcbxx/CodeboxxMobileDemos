/*
Themed Demo
-----------
This demo shows how to use the themed Text and View components that adapt to light and dark modes.

Usage Steps:
1. Import the themed components:
   import { Text, View } from '@/components/Themed';

2. Use <Text> and <View> in place of React Native's default components:
   <View>
     <Text>This text and view automatically adapt to light/dark mode.</Text>
     <Text lightColor="#007aff" darkColor="#0ff">Custom themed color example.</Text>
   </View>

Props:
- lightColor?: string – Color for light mode.
- darkColor?: string – Color for dark mode.
- All other standard Text/View props are supported.

To use these themed components in another component, import them and use them as drop-in replacements for the default React Native components, with optional color overrides.
*/

import { Text, View } from '../../../components/Themed';

export default function ThemedDemo() {
  return (
    <View style={{ padding: 24 }}>
      <Text>This text and view automatically adapt to light/dark mode.</Text>
      <Text lightColor="#007aff" darkColor="#0ff">Custom themed color example.</Text>
    </View>
  );
}
