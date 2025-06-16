/*
AccessModifiers Demo
====================

What this demo shows:
This demo shows public, private, and protected access control in TypeScript classes.

What concept you need:
You need the AccessModifiers concept from: /concepts/AccessModifiers.tsx

How to copy and use in your project:
1. Copy the AccessModifiers.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the accessmodifiers examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import AccessModifiers from '../../../concepts/AccessModifiers';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the accessmodifiers concept - copy this line */}

export default function AccessModifiersDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      {/* AccessModifiers concept - copy this component */}
      <AccessModifiers />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the AccessModifiers concept to learn about encapsulation and access control patterns.
        </Text>
      </View>
    </ScrollView>
  );
}