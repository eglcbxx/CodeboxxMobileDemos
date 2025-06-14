/*
Spacer Demo
-----------
This demo shows how to use the Spacer component to add vertical or horizontal space between elements.

Usage Steps:
1. Import the Spacer component:
   import Spacer from '@/components/Spacer';

2. Use the component in your JSX to add space:
   <Spacer height={48} />
   <Spacer width={24} />

Props:
- height?: number (default: 8) – Height in pixels.
- width?: number (default: 0) – Width in pixels.

To use Spacer in another component, import it and provide the desired height and/or width to add space between elements.
*/

import Spacer from '@/components/Spacer';
import StyledText from '@/components/StyledText';
import { ScrollView, View } from 'react-native';

export default function SpacerDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <StyledText>The grey area shows a spacer with a height of 48</StyledText>
      <View style={{ backgroundColor: '#e0e0e0', justifyContent: 'center', alignItems: 'center' }}>
        <Spacer height={48} />
      </View>
    </ScrollView>
  );
}