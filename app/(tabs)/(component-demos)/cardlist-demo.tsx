/*
CardList Demo
-------------
This demo shows how to use the CardList component to render a list of cards using a FlatList.

Usage Steps:
1. Import the CardList component:
   import CardList from '@/components/CardList';

2. Prepare your data array and a renderItem function:
   const cards = [
     { title: 'Card 1', description: 'Description 1' },
     { title: 'Card 2', description: 'Description 2' },
   ];

   function renderItem({ item }) {
     return <InfoCard title={item.title}><StyledText>{item.description}</StyledText></InfoCard>;
   }

3. Use the component in your JSX:
   <CardList
     data={cards}
     renderItem={renderItem}
     keyExtractor={(_, idx) => idx.toString()}
   />

Props:
- data: T[] (required) – The array of items to render.
- renderItem: ({ item }: { item: T }) => React.ReactElement (required) – Function to render each item.
- keyExtractor: (item: T, index: number) => string (required) – Function to provide a unique key for each item.

To use CardList in another component, import it and provide the required data, renderItem, and keyExtractor props.
*/

import CardList from '@/components/CardList';
import InfoCard from '@/components/InfoCard';
import StyledText from '@/components/StyledText';
import { View } from 'react-native';

const cards = [
  { title: 'Card 1', description: 'Description 1' },
  { title: 'Card 2', description: 'Description 2' },
];

export default function CardListDemo() {
  return (
    <View style={{ flex: 1, padding: 16, gap: 16, marginVertical: 16 }}>
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