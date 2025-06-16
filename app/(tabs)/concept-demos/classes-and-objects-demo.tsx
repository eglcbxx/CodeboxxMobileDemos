/*
ClassesAndObjects Demo
======================

What this demo shows:
This demo demonstrates class definitions, object instantiation, and inheritance patterns.

What concept you need:
You need the ClassesAndObjects concept from: /concepts/ClassesAndObjects.tsx

How to copy and use in your project:
1. Copy the ClassesAndObjects.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the classesandobjects examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import ClassesAndObjects from '../../../concepts/ClassesAndObjects';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the classesandobjects concept - copy this line */}

export default function ClassesAndObjectsDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      {/* ClassesAndObjects concept - copy this component */}
      <ClassesAndObjects />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the ClassesAndObjects concept to learn about object-oriented programming in TypeScript.
        </Text>
      </View>
    </ScrollView>
  );
}