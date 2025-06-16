/*
Loops Demo
==========

What this demo shows:
This demo demonstrates various loop patterns including for, while, and array iteration methods.

What concept you need:
You need the Loops concept from: /concepts/Loops.tsx

How to copy and use in your project:
1. Copy the Loops.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the loops examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import Loops from '../../../concepts/Loops';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the loops concept - copy this line */}

export default function LoopsDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}> 
      {/* Loops concept - copy this component */}
      <Loops />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the Loops concept to learn about iteration patterns and control flow in TypeScript.
        </Text>
      </View>
    </ScrollView>
  );
}