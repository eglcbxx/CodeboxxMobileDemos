/*
List Demo
---------
Copy the List component to render data arrays with customizable item rendering and empty states.
Perfect for displaying collections with proper fallback messaging when no data is available.
*/

import { View } from 'react-native';
import List from '../../../components/List';
import StyledText from '../../../components/StyledText';
import { ThemedText } from '../../../components/ThemedText';

export default function ListDemo() {
  const items = ['React Native', 'TypeScript', 'Expo', 'JavaScript', 'CSS'];
  const emptyArray: string[] = [];

  const moreItems = [
    { id: 1, name: 'Product A', category: 'Electronics' },
    { id: 2, name: 'Product B', category: 'Books' },
    { id: 3, name: 'Product C', category: 'Clothing' },
    { id: 4, name: 'Product D', category: 'Home' },
    { id: 5, name: 'Product E', category: 'Sports' },
  ];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        List Component Demo
      </ThemedText>

      <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Simple String List:
      </ThemedText>
      <List
        data={items}
        renderItem={({ item }) => (
          <View style={{ 
            padding: 12, 
            marginBottom: 8, 
            backgroundColor: '#f5f5f5', 
            borderRadius: 8 
          }}>
            <StyledText>{item}</StyledText>
          </View>
        )}
      />

      <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginTop: 24, marginBottom: 8 }}>
        Empty List (shows empty state):
      </ThemedText>
      <List
        data={emptyArray}
        renderItem={({ item }) => <StyledText>{item}</StyledText>}
      />

      <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginTop: 24, marginBottom: 8 }}>
        Object List with Custom Rendering:
      </ThemedText>
      <List
        data={moreItems}
        renderItem={({ item }) => (
          <View style={{ 
            padding: 16, 
            marginBottom: 8, 
            backgroundColor: '#e8f4fd', 
            borderRadius: 8,
            borderLeftWidth: 4,
            borderLeftColor: '#007AFF'
          }}>
            <StyledText style={{ fontWeight: 'bold', fontSize: 16 }}>
              {item.name}
            </StyledText>
            <StyledText style={{ color: '#666', marginTop: 4 }}>
              Category: {item.category}
            </StyledText>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}