/*
Arrays and Collections Demo
---------------------------
Copy this demo to explore array methods and collection manipulation with practical examples.
Shows mapping, filtering, reducing, and modern array operations in action.
*/

import { ScrollView, View } from 'react-native';
import { ThemedText } from '../../../components/ThemedText';
import ArraysAndCollections from '../../../concepts/ArraysAndCollections';

export default function ArraysAndCollectionsDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        Arrays and Collections Concept Demo
      </ThemedText>
      
      <ArraysAndCollections />
      
      <View style={{ marginTop: 24, padding: 16, backgroundColor: '#e8f4fd', borderRadius: 8 }}>
        <ThemedText style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>
          Copy the ArraysAndCollections concept to learn about array methods and data transformation.
          Perfect for understanding map, filter, reduce, and modern JavaScript array operations.
        </ThemedText>
      </View>
    </ScrollView>
  );
}
