/*
Divider Demo
------------
This demo shows how to use the Divider component to visually separate content.

Usage Steps:
1. Import the Divider component:
   import Divider from '@/components/Divider';

2. Use the component in your JSX to separate sections:
   <StyledText type="paragraph">Above the divider</StyledText>
   <Divider />
   <StyledText type="paragraph">Below the divider</StyledText>

Props:
- color?: string (default: #ccc) – The color of the divider line.
- thickness?: number (default: 1) – The thickness of the divider line.
- marginVertical?: number (default: 8) – The vertical margin around the divider.

To use Divider in another component, import it and place it between elements you want to separate. You can customize its appearance with the optional props.
*/

import Divider from '@/components/Divider';
import StyledText from '@/components/StyledText';
import { ScrollView, View } from 'react-native';

export default function DividerDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        <StyledText type="paragraph">Above the divider</StyledText>
        <Divider />
        <StyledText type="paragraph">Below the divider</StyledText>
      </View>
    </ScrollView>
  );
}
