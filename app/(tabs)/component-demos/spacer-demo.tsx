/*
Spacer Demo
===========

What this demo shows:
This demo displays invisible spacing components that create consistent gaps between UI elements in your layout.

What component you need:
You need the Spacer component from: /components/Spacer.tsx
You also need: StyledText component from: /components/StyledText.tsx

How to copy and use in your project:
1. Copy the Spacer.tsx and StyledText.tsx files to your components folder
2. Copy the import lines below
3. Copy any of the Spacer examples below and paste them in your screen

Code examples to copy:
*/

import Spacer from '@/components/Spacer';
import StyledText from '@/components/StyledText';
import { ScrollView, Text, View } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';

export default function SpacerDemo() {
  const styles = useThemedStyles();
  return (
    <ScrollView style={{ flex: 1, padding: 16, ...styles.scrollViewBackground }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, ...styles.text }}>
        Spacer Component Demo
      </Text>

      <View style={{ backgroundColor: '#f0f0f0', padding: 16, borderRadius: 8 }}>
        <StyledText type="heading2">Vertical Spacing Examples</StyledText>
        
        <StyledText>Text before small spacer (8px)</StyledText>
        {/* Small vertical spacer - copy this line */}
        <Spacer height={8} />
        <StyledText>Text after small spacer</StyledText>
        
        {/* Medium vertical spacer - copy this line */}
        <Spacer height={24} />
        <StyledText>Text before medium spacer (24px)</StyledText>
        <Spacer height={24} />
        <StyledText>Text after medium spacer</StyledText>
        
        {/* Large vertical spacer - copy this line */}
        <Spacer height={48} />
        <StyledText>Text after large spacer (48px)</StyledText>
      </View>

      <Spacer height={32} />

      <View style={{ backgroundColor: '#e8f5e8', padding: 16, borderRadius: 8 }}>
        <StyledText type="heading2">Horizontal Spacing Examples</StyledText>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
          <StyledText>Left</StyledText>
          {/* Small horizontal spacer - copy this line */}
          <Spacer width={16} />
          <StyledText>Middle</StyledText>
          {/* Large horizontal spacer - copy this line */}
          <Spacer width={32} />
          <StyledText>Right</StyledText>
        </View>
      </View>
    </ScrollView>
  );
}