/*
CardList Demo
-------------
Demonstrates the CardList component for rendering scrollable lists of cards or items.

Copy-paste instructions:
1. Copy the CardList.tsx file to your components folder
2. Import: import CardList from './components/CardList';
3. Use with data array, renderItem function, and keyExtractor function
*/

import CardList from '@/components/CardList';
import InfoCard from '@/components/InfoCard';
import StyledText from '@/components/StyledText';
import { View } from 'react-native';

const cards = [
  { title: 'Welcome Card', description: 'This is the first card in our list with some sample content.' },
  { title: 'Feature Card', description: 'This card showcases a key feature of our application.' },
  { title: 'Info Card', description: 'Here you can display important information for your users.' },
  { title: 'Action Card', description: 'This card could contain buttons or interactive elements.' },
];

export default function CardListDemo() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
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