/*
DataTypes Demo
==============

What this demo shows:
This demo demonstrates TypeScript data type concepts with practical examples.

What concept you need:
You need the DataTypes concept from: /concepts/DataTypes.tsx

How to copy and use in your project:
1. Copy the DataTypes.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the datatypes examples below and paste them in your screen

Code examples to copy:
*/

import { useThemedStyles } from '@/hooks/useThemedStyles';
import { ScrollView, Text, View } from 'react-native';
import DataTypes from '../../../concepts/DataTypes';
{/* Import the datatypes concept - copy this line */}

export default function DataTypesDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>  
      {/* DataTypes concept - copy this component */}
      <DataTypes />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the DataTypes concept to learn about TypeScript type annotations. Perfect for understanding primitives, arrays, objects, and type safety.
        </Text>
      </View>
    </ScrollView>
  );
}