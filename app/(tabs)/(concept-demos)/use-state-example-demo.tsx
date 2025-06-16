/*
useState Hook Demo
------------------
Copy this demo to explore React state management with practical interactive examples.
Shows counter, text, boolean, and object state management patterns.
*/

import { ScrollView, View } from 'react-native';
import { ThemedText } from '../../../components/ThemedText';
import UseStateExample from '../../../concepts/UseStateExample';

export default function UseStateExampleDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        useState Hook Concept Demo
      </ThemedText>
      
      <UseStateExample />
      
      <View style={{ marginTop: 24, padding: 16, backgroundColor: '#e8f4fd', borderRadius: 8 }}>
        <ThemedText style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>
          Copy the UseStateExample concept to learn about React state management.
          Perfect for understanding reactivity, re-rendering, and interactive UI patterns.
        </ThemedText>
      </View>
    </ScrollView>
  );
}
