/*
TypeDeclarations Demo
=====================

What this demo shows:
This demo demonstrates TypeScript type annotations, interfaces, and custom type definitions.

What concept you need:
You need the TypeDeclarations concept from: /concepts/TypeDeclarations.tsx

How to copy and use in your project:
1. Copy the TypeDeclarations.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the typedeclarations examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import TypeDeclarations from '../../../concepts/TypeDeclarations';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the typedeclarations concept - copy this line */}

export default function TypeDeclarationsDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      {/* TypeDeclarations concept - copy this component */}
      <TypeDeclarations />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the TypeDeclarations concept to learn about TypeScript type system and safety patterns.
        </Text>
      </View>
    </ScrollView>
  );
}