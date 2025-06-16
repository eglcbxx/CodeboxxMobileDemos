/*
UseEffectExample Demo
=====================

What this demo shows:
This demo shows React useEffect hook patterns for side effects and lifecycle management.

What concept you need:
You need the UseEffectExample concept from: /concepts/UseEffectExample.tsx

How to copy and use in your project:
1. Copy the UseEffectExample.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the useeffectexample examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import UseEffectExample from '../../../concepts/UseEffectExample';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the useeffectexample concept - copy this line */}

export default function UseEffectExampleDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      {/* UseEffectExample concept - copy this component */}
      <UseEffectExample />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the UseEffectExample concept to learn about React effect patterns and lifecycle management.
        </Text>
      </View>
    </ScrollView>
  );
}