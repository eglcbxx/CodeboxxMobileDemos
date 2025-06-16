/*
InfoCard Demo
=============

What this demo shows:
This demo displays content cards with titles and customizable background colors, perfect for organizing information sections.

What component you need:
You need the InfoCard component from: /components/InfoCard.tsx
You also need: StyledText component from: /components/StyledText.tsx

How to copy and use in your project:
1. Copy the InfoCard.tsx and StyledText.tsx files to your components folder
2. Copy the import lines below
3. Copy any of the InfoCard examples below and paste them in your screen

Code examples to copy:
*/

import InfoCard from '@/components/InfoCard';
import StyledText from '@/components/StyledText';
import { ScrollView, View } from 'react-native';

export default function InfoCardDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        {/* Basic info card with title - copy this block */}
        <InfoCard title="Welcome Card">
          <StyledText>This is a basic info card with a title. Perfect for displaying information, features, or content sections.</StyledText>
        </InfoCard>
        
        {/* Success card with green background - copy this block */}
        <InfoCard title="Success Card" backgroundColor="#d4edda">
          <StyledText>This card has a custom green background color to indicate success or positive information.</StyledText>
        </InfoCard>
        
        {/* Warning card with yellow background - copy this block */}
        <InfoCard title="Warning Card" backgroundColor="#fff3cd">
          <StyledText>This yellow card can be used for warnings or important notices.</StyledText>
        </InfoCard>
        
        {/* Card without title - copy this block */}
        <InfoCard backgroundColor="#f8f9fa">
          <StyledText>This card doesn&apos;t have a title, just content with a light gray background. Useful for simple content blocks.</StyledText>
        </InfoCard>
      </View>
    </ScrollView>
  );
}