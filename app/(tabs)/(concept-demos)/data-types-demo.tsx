/*
Data Types Demo
---------------
Copy this demo to explore TypeScript data type concepts with practical examples.
Shows primitive types, arrays, objects, and null/undefined handling in action.
*/

import { ScrollView, View } from 'react-native';
import { ThemedText } from '../../../components/ThemedText';
import DataTypes from '../../../concepts/DataTypes';

export default function DataTypesDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        Data Types Concept Demo
      </ThemedText>
      
      <DataTypes />
      
      <View style={{ marginTop: 24, padding: 16, backgroundColor: '#e8f4fd', borderRadius: 8 }}>
        <ThemedText style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>
          Copy the DataTypes concept to learn about TypeScript type annotations.
          Perfect for understanding primitives, arrays, objects, and type safety.
        </ThemedText>
      </View>
    </ScrollView>
  );
}
