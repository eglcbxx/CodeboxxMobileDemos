/*
List Demo
=========

What this demo shows:
This demo shows the List component for displaying arrays of data with custom rendering and empty state handling.

What component you need:
You need the List component from: /components/List.tsx
You also need: StyledText component from: /components/StyledText.tsx

How to copy and use in your project:
1. Copy the List.tsx and StyledText.tsx files to your components folder
2. Copy the import lines below
3. Copy the List examples below and paste them in your screen

Code examples to copy:
*/

import List from '@/components/List';
import StyledText from '@/components/StyledText';
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { ScrollView, Text, View } from 'react-native';
{/* Import the list component - copy this line */}

export default function ListDemo() {
  const styles = useThemedStyles();
  
  const items = ['Apple', 'Banana', 'Cherry', 'Date'];
  const moreItems = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Carrot', category: 'Vegetable' },
    { name: 'Banana', category: 'Fruit' }
  ];
  const emptyArray: string[] = [];

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      <Text style={[{ marginBottom: 24 }, styles.heading]}>
        List Component Demo
      </Text>
      
      <Text style={[{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }, styles.text]}>
        Simple String List:
      </Text>
      
      {/* Simple List with strings - copy this example */}
      <List
        data={items}
        renderItem={({ item }) => (
          <View style={[{ padding: 8, marginBottom: 4, borderRadius: 4 }, styles.cardBackground]}>
            <StyledText>{item}</StyledText>
          </View>
        )}
        style={{ maxHeight: 200 }}
      />

      <View style={{ height: 24 }} />

      <Text style={[{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }, styles.text]}>
        Object List with Custom Rendering:
      </Text>
      
      {/* List with objects - copy this example */}
      <List
        data={moreItems}
        renderItem={({ item }) => (
          <View style={[{ padding: 12, marginBottom: 8, borderRadius: 6 }, styles.successBackground]}>
            <StyledText type="heading2">{item.name}</StyledText>
            <StyledText type="paragraph">Category: {item.category}</StyledText>
          </View>
        )}
        style={{ maxHeight: 200 }}
      />

      <View style={{ height: 24 }} />

      <Text style={[{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }, styles.text]}>
        Empty List Example:
      </Text>
      
      {/* Empty List - copy this example */}
      <List
        data={emptyArray}
        renderItem={({ item }) => (
          <View>
            <StyledText>{item}</StyledText>
          </View>
        )}
        style={{ maxHeight: 100 }}
      />
    </ScrollView>
  );
}