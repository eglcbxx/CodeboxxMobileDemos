/*
CardList Demo
=============

What this demo shows:
This demo displays a scrollable list of cards that can show any type of content, like articles, products, or user profiles.

What component you need:
You need the CardList component from: /components/CardList.tsx
You also need: InfoCard component from: /components/InfoCard.tsx
You also need: StyledText component from: /components/StyledText.tsx

How to copy and use in your project:
1. Copy the CardList.tsx, InfoCard.tsx, and StyledText.tsx files to your components folder
2. Copy the import lines below
3. Copy the data array and CardList usage below and paste them in your screen

Code examples to copy:
*/

import CardList from '@/components/CardList';
import InfoCard from '@/components/InfoCard';
import StyledText from '@/components/StyledText';
import { View } from 'react-native';

// Sample data for cards - copy this array
const cards = [
  { title: 'Welcome Card', description: 'This is the first card in our list with some sample content.' },
  { title: 'Feature Card', description: 'This card showcases a key feature of our application.' },
  { title: 'Info Card', description: 'Here you can display important information for your users.' },
  { title: 'Action Card', description: 'This card could contain buttons or interactive elements.' },
];

export default function CardListDemo() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* CardList with InfoCard items - copy this entire block */}
      <CardList
        data={cards}
        renderItem={({ item }) => (
          <InfoCard title={item.title}>
            <StyledText>{item.description}</StyledText>
          </InfoCard>
        )}
        keyExtractor={(_, idx) => idx.toString()}
      />
    </View>
  );
}