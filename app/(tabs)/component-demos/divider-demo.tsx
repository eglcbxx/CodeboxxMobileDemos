/*
Divider Demo
============

What this demo shows:
This demo displays horizontal lines that visually separate content sections with customizable styling.

What component you need:
You need the Divider component from: /components/Divider.tsx
You also need: StyledText component from: /components/StyledText.tsx

How to copy and use in your project:
1. Copy the Divider.tsx and StyledText.tsx files to your components folder
2. Copy the import lines below
3. Copy any of the Divider examples below and paste them in your screen

Code examples to copy:
*/

import Divider from '@/components/Divider';
import StyledText from '@/components/StyledText';
import { ScrollView, View } from 'react-native';

export default function DividerDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ marginVertical: 16 }}>
        <StyledText type="paragraph">Section 1: Content above the default divider</StyledText>
        
        {/* Default divider - copy this line */}
        <Divider />
        
        <StyledText type="paragraph">Section 2: Content between dividers</StyledText>
        
        {/* Blue custom divider - copy this line */}
        <Divider color="#007bff" thickness={2} marginVertical={16} />
        
        <StyledText type="paragraph">Section 3: Content after custom blue divider</StyledText>
        
        {/* Green thick divider - copy this line */}
        <Divider color="#28a745" thickness={3} marginVertical={24} />
        
        <StyledText type="paragraph">Section 4: Final content section</StyledText>
      </View>
    </ScrollView>
  );
}
