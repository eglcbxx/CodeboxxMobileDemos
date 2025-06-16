/*
FunctionsAndMethods Demo
========================

What this demo shows:
This demo demonstrates function declarations, arrow functions, and method definitions.

What concept you need:
You need the FunctionsAndMethods concept from: /concepts/FunctionsAndMethods.tsx

How to copy and use in your project:
1. Copy the FunctionsAndMethods.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the functionsandmethods examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import FunctionsAndMethods from '../../../concepts/FunctionsAndMethods';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the functionsandmethods concept - copy this line */}

export default function FunctionsAndMethodsDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>  
      {/* FunctionsAndMethods concept - copy this component */}
      <FunctionsAndMethods />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the FunctionsAndMethods concept to learn about function patterns and method organization.
        </Text>
      </View>
    </ScrollView>
  );
}