/*
Operators Demo
==============

What this demo shows:
This demo shows arithmetic, comparison, logical, and assignment operators in action.

What concept you need:
You need the Operators concept from: /concepts/Operators.tsx

How to copy and use in your project:
1. Copy the Operators.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the operators examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import Operators from '../../../concepts/Operators';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the operators concept - copy this line */}

export default function OperatorsDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      {/* Operators concept - copy this component */}
      <Operators />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the Operators concept to learn about mathematical and logical operations in TypeScript.
        </Text>
      </View>
    </ScrollView>
  );
}