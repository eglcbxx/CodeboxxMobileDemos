/*
Conditional Statements Demo
---------------------------
Copy this demo to explore conditional logic concepts with practical examples.
Shows if/else statements, ternary operators, and switch cases in action.
*/

import { ScrollView, View } from 'react-native';
import { ThemedText } from '../../../components/ThemedText';
import ConditionalStatements from '../../../concepts/ConditionalStatements';

export default function ConditionalStatementsDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        Conditional Statements Concept Demo
      </ThemedText>
      
      <ConditionalStatements />
      
      <View style={{ marginTop: 24, padding: 16, backgroundColor: '#e8f4fd', borderRadius: 8 }}>
        <ThemedText style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>
          Copy the ConditionalStatements concept to learn about if/else, ternary operators, and switch cases.
          Perfect for understanding conditional logic and control flow patterns.
        </ThemedText>
      </View>
    </ScrollView>
  );
}
