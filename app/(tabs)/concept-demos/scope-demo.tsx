/*
Scope Demo
==========

What this demo shows:
This demo shows variable scope, block scope, and closure patterns.

What concept you need:
You need the Scope concept from: /concepts/Scope.tsx

How to copy and use in your project:
1. Copy the Scope.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the scope examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import Scope from '../../../concepts/Scope';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the scope concept - copy this line */}

export default function ScopeDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>   
      {/* Scope concept - copy this component */}
      <Scope />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the Scope concept to learn about variable visibility and closure patterns in TypeScript.
        </Text>
      </View>
    </ScrollView>
  );
}