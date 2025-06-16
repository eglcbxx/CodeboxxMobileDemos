/*
Spacer Demo
-----------
Copy the Spacer component to create consistent spacing between UI elements.
Perfect for maintaining visual hierarchy and proper spacing in your layouts.
*/

import { ScrollView, View } from 'react-native';
import Spacer from '../../../components/Spacer';
import StyledText from '../../../components/StyledText';
import { ThemedText } from '../../../components/ThemedText';

export default function SpacerDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        Spacer Component Demo
      </ThemedText>

      <View style={{ backgroundColor: '#f0f0f0', padding: 16, borderRadius: 8 }}>
        <StyledText type="heading2">Vertical Spacing Examples</StyledText>
        
        <StyledText>Text before small spacer (8px)</StyledText>
        <Spacer height={8} />
        <StyledText>Text after small spacer</StyledText>
        
        <Spacer height={24} />
        <StyledText>Text before medium spacer (24px)</StyledText>
        <Spacer height={24} />
        <StyledText>Text after medium spacer</StyledText>
        
        <Spacer height={48} />
        <StyledText>Text before large spacer (48px)</StyledText>
        <Spacer height={48} />
        <StyledText>Text after large spacer</StyledText>
      </View>
      
      <Spacer height={32} />
      
      <View style={{ backgroundColor: '#f0f0f0', padding: 16, borderRadius: 8 }}>
        <StyledText type="heading2">Horizontal Spacing Examples</StyledText>
        <Spacer height={16} />
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <StyledText>Left Text</StyledText>
          <Spacer width={16} />
          <StyledText>Right Text (16px gap)</StyledText>
        </View>
        
        <Spacer height={16} />
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <StyledText>Left Text</StyledText>
          <Spacer width={32} />
          <StyledText>Right Text (32px gap)</StyledText>
        </View>
      </View>
    </ScrollView>
  );
}