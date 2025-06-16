/*
Variable Declaration Demo
-------------------------
Copy this demo to see variable declaration concepts in action.
Demonstrates const and let usage patterns with practical examples and visual feedback.
*/

import { ScrollView, View } from 'react-native';
import { ThemedText } from '../../../components/ThemedText';
import VariableDeclaration from '../../../concepts/VariableDeclaration';

export default function VariableDeclarationDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        Variable Declaration Concept Demo
      </ThemedText>
      
      <VariableDeclaration />
      
      <View style={{ marginTop: 24, padding: 16, backgroundColor: '#e8f4fd', borderRadius: 8 }}>
        <ThemedText style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>
          Copy the VariableDeclaration concept to learn about const and let variable declarations.
          Perfect for understanding variable scoping and assignment in TypeScript.
        </ThemedText>
      </View>
    </ScrollView>
  );
}
