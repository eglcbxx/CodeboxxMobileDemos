/*
Loops Demo
----------
Copy this demo to explore loop concepts with practical examples.
Shows for, for...of, forEach, map, and while loops in action.
*/

import { ScrollView, View } from 'react-native';
import { ThemedText } from '../../../components/ThemedText';
import Loops from '../../../concepts/Loops';

export default function LoopsDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        Loops Concept Demo
      </ThemedText>
      
      <Loops />
      
      <View style={{ marginTop: 24, padding: 16, backgroundColor: '#e8f4fd', borderRadius: 8 }}>
        <ThemedText style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>
          Copy the Loops concept to learn about iteration patterns and array processing.
          Perfect for understanding different loop types and their use cases.
        </ThemedText>
      </View>
    </ScrollView>
  );
}
