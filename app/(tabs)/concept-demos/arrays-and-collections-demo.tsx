/*
ArraysAndCollections Demo
=========================

What this demo shows:
This demo demonstrates array operations, methods, and collection manipulation in TypeScript.

What concept you need:
You need the ArraysAndCollections concept from: /concepts/ArraysAndCollections.tsx

How to copy and use in your project:
1. Copy the ArraysAndCollections.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the arraysandcollections examples below and paste them in your screen

Code examples to copy:
*/

import { useThemedStyles } from '@/hooks/useThemedStyles';
import { ScrollView, Text, View } from 'react-native';
import ArraysAndCollections from '../../../concepts/ArraysAndCollections';
{/* Import the arraysandcollections concept - copy this line */}

export default function ArraysAndCollectionsDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      {/* ArraysAndCollections concept - copy this component */}
      <ArraysAndCollections />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the ArraysAndCollections concept to learn about array methods and data transformation. Perfect for understanding map, filter, reduce, and modern JavaScript array operations.
        </Text>
      </View>
    </ScrollView>
  );
}