/*
VariableDeclaration Demo
========================

What this demo shows:
This demo demonstrates variable declaration concepts in action.

What concept you need:
You need the VariableDeclaration concept from: /concepts/VariableDeclaration.tsx

How to copy and use in your project:
1. Copy the VariableDeclaration.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the variabledeclaration examples below and paste them in your screen

Code examples to copy:
*/

import { useThemedStyles } from '@/hooks/useThemedStyles';
import { ScrollView, Text, View } from 'react-native';
import VariableDeclaration from '../../../concepts/VariableDeclaration';
{/* Import the variabledeclaration concept - copy this line */}

export default function VariableDeclarationDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      {/* VariableDeclaration concept - copy this component */}
      <VariableDeclaration />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the VariableDeclaration concept to learn about const and let variable declarations. Perfect for understanding variable scoping and immutability patterns in TypeScript.
        </Text>
      </View>
    </ScrollView>
  );
}