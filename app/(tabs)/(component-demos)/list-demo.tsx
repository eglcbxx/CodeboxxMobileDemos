/*
List Demo
---------
This demo shows how to use the List component to render a list of items with an empty state message.

Usage Steps:
1. Import the List component:
   import List from '@/components/List';

2. Prepare your data array and renderItem function:
   const items = ['Item 1', 'Item 2', ...];
   function renderItem({ item }) {
     return <StyledText>{item}</StyledText>;
   }

3. Use the component in your JSX:
   <List data={items} renderItem={renderItem} />

Props:
- data: T[] (required) – Array of items to display.
- renderItem: ListRenderItem<T> (required) – Function to render each item.
- keyExtractor?: (item: T, index: number) => string – Unique key for each item (optional).

To use List in another component, import it and provide the required data and renderItem props, and optionally keyExtractor.
*/

import List from '@/components/List';
import StyledText from '@/components/StyledText';
import { ListRenderItemInfo, View } from 'react-native';

export default function ListDemo() {
  const items = ['Item 1'].concat(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));

  return (
    <View style={{ flex: 1, padding: 16, gap: 16, marginVertical: 16 }}>
      <List
        data={items}
        renderItem={function ({ item }: ListRenderItemInfo<string>): React.ReactElement | null {
          return <StyledText>{item}</StyledText>;
        }}
      />
    </View>
  );
}