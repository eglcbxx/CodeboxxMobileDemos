/*
ConditionalStatements Demo
==========================

What this demo shows:
This demo shows conditional logic patterns including if/else, ternary operators, and switch statements.

What concept you need:
You need the ConditionalStatements concept from: /concepts/ConditionalStatements.tsx

How to copy and use in your project:
1. Copy the ConditionalStatements.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the conditionalstatements examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import ConditionalStatements from '../../../concepts/ConditionalStatements';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the conditionalstatements concept - copy this line */}

export default function ConditionalStatementsDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>   
      {/* ConditionalStatements concept - copy this component */}
      <ConditionalStatements />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the ConditionalStatements concept to learn about decision-making logic in TypeScript.
        </Text>
      </View>
    </ScrollView>
  );
}