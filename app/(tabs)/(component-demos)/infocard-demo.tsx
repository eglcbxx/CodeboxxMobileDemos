/*
InfoCard Demo
-------------
Demonstrates the InfoCard component for displaying content in card format with customizable styling.

Copy-paste instructions:
1. Copy the InfoCard.tsx file to your components folder
2. Import: import InfoCard from './components/InfoCard';
3. Use with optional title and backgroundColor props to wrap your content
*/

import InfoCard from '@/components/InfoCard';
import StyledText from '@/components/StyledText';
import { ScrollView, View } from 'react-native';

export default function InfoCardDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        <InfoCard title="Welcome Card">
          <StyledText>This is a basic info card with a title. Perfect for displaying information, features, or content sections.</StyledText>
        </InfoCard>
        
        <InfoCard title="Success Card" backgroundColor="#d4edda">
          <StyledText>This card has a custom green background color to indicate success or positive information.</StyledText>
        </InfoCard>
        
        <InfoCard title="Warning Card" backgroundColor="#fff3cd">
          <StyledText>This yellow card can be used for warnings or important notices.</StyledText>
        </InfoCard>
        
        <InfoCard backgroundColor="#f8d7da">
          <StyledText type="heading2">No Title Card</StyledText>
          <StyledText>This card does not have a title prop, showing just content with a custom background.</StyledText>
        </InfoCard>
      </View>
    </ScrollView>
  );
}