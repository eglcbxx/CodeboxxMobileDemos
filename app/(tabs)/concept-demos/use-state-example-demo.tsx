/*
UseStateExample Demo
====================

What this demo shows:
This demo demonstrates React useState hook patterns for state management.

What concept you need:
You need the UseStateExample concept from: /concepts/UseStateExample.tsx

How to copy and use in your project:
1. Copy the UseStateExample.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the usestateexample examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import UseStateExample from '../../../concepts/UseStateExample';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the usestateexample concept - copy this line */}

export default function UseStateExampleDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}> 
      {/* UseStateExample concept - copy this component */}
      <UseStateExample />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the UseStateExample concept to learn about React state management patterns.
        </Text>
      </View>
    </ScrollView>
  );
}