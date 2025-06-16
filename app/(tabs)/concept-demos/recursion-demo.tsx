/*
Recursion Demo
==============

What this demo shows:
This demo demonstrates recursive function patterns and problem-solving approaches.

What concept you need:
You need the Recursion concept from: /concepts/Recursion.tsx

How to copy and use in your project:
1. Copy the Recursion.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the recursion examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import Recursion from '../../../concepts/Recursion';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the recursion concept - copy this line */}

export default function RecursionDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}> 
      {/* Recursion concept - copy this component */}
      <Recursion />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the Recursion concept to learn about recursive algorithms and self-calling functions.
        </Text>
      </View>
    </ScrollView>
  );
}