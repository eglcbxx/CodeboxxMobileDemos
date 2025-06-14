/*
InfoCard Demo
-------------
This demo shows how to use the InfoCard component to display a card with an optional title and content.

Usage Steps:
1. Import the InfoCard component:
   import InfoCard from '@/components/InfoCard';

2. Use the component in your JSX:
   <InfoCard title="InfoCard Title">
     <StyledText>This is an info card.</StyledText>
   </InfoCard>
   <InfoCard backgroundColor="#e0f7fa">
     <StyledText>Custom background color!</StyledText>
   </InfoCard>
   <InfoCard>
     <StyledText>No title, default background.</StyledText>
   </InfoCard>

Props:
- title?: string – Optional card title.
- children: ReactNode – Content inside the card.
- backgroundColor?: string (default: #f0f0f0) – Card background color.

To use InfoCard in another component, import it and provide the optional title, children, and backgroundColor as needed.
*/

import InfoCard from '@/components/InfoCard';
import StyledText from '@/components/StyledText';
import { ScrollView, View } from 'react-native';

export default function InfoCardDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        <InfoCard title="InfoCard Title">
          <StyledText>This is an info card.</StyledText>
        </InfoCard>
        <InfoCard backgroundColor="#e0f7fa">
          <StyledText>Custom background color!</StyledText>
        </InfoCard>
        <InfoCard>
          <StyledText>No title, default background.</StyledText>
        </InfoCard>
      </View>
    </ScrollView>
  );
}