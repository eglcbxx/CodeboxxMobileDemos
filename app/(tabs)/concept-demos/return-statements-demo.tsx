/*
ReturnStatements Demo
=====================

What this demo shows:
This demo demonstrates return value patterns and early return strategies.

What concept you need:
You need the ReturnStatements concept from: /concepts/ReturnStatements.tsx

How to copy and use in your project:
1. Copy the ReturnStatements.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the returnstatements examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import ReturnStatements from '../../../concepts/ReturnStatements';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the returnstatements concept - copy this line */}

export default function ReturnStatementsDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      {/* ReturnStatements concept - copy this component */}
      <ReturnStatements />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the ReturnStatements concept to learn about function return patterns and control flow.
        </Text>
      </View>
    </ScrollView>
  );
}