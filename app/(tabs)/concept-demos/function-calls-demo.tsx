/*
FunctionCalls Demo
==================

What this demo shows:
This demo shows function invocation patterns and argument handling.

What concept you need:
You need the FunctionCalls concept from: /concepts/FunctionCalls.tsx

How to copy and use in your project:
1. Copy the FunctionCalls.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the functioncalls examples below and paste them in your screen

Code examples to copy:
*/

import { useThemedStyles } from '@/hooks/useThemedStyles';
import { ScrollView, Text, View } from 'react-native';
import FunctionCalls from '../../../concepts/FunctionCalls';
{/* Import the functioncalls concept - copy this line */}

export default function FunctionCallsDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      {/* FunctionCalls concept - copy this component */}
      <FunctionCalls />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the FunctionCalls concept to learn about JavaScript/TypeScript function calling patterns. Perfect for understanding argument passing, callbacks, and advanced invocation techniques.
        </Text>
      </View>
    </ScrollView>
  );
}