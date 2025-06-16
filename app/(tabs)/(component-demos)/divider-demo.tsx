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
/*
Divider Demo
------------
Demonstrates the Divider component for separating content with customizable styling.

Copy-paste instructions:
1. Copy the Divider.tsx file to your components folder
2. Import: import Divider from './components/Divider';
3. Place between content elements with optional color, thickness, and margin props
*/

import Divider from '@/components/Divider';
import StyledText from '@/components/StyledText';
import { ScrollView, View } from 'react-native';

export default function DividerDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ marginVertical: 16 }}>
        <StyledText type="paragraph">Section 1: Content above the default divider</StyledText>
        <Divider />
        <StyledText type="paragraph">Section 2: Content between dividers</StyledText>
        <Divider color="#007bff" thickness={2} marginVertical={16} />
        <StyledText type="paragraph">Section 3: Content after custom blue divider</StyledText>
        <Divider color="#28a745" thickness={3} marginVertical={24} />
        <StyledText type="paragraph">Section 4: Final content section</StyledText>
      </View>
    </ScrollView>
  );
}
