/*
ParametersAndArguments Demo
===========================

What this demo shows:
This demo shows parameter passing, default values, rest parameters, and destructuring.

What concept you need:
You need the ParametersAndArguments concept from: /concepts/ParametersAndArguments.tsx

How to copy and use in your project:
1. Copy the ParametersAndArguments.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the parametersandarguments examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import ParametersAndArguments from '../../../concepts/ParametersAndArguments';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the parametersandarguments concept - copy this line */}

export default function ParametersAndArgumentsDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>  
      {/* ParametersAndArguments concept - copy this component */}
      <ParametersAndArguments />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the ParametersAndArguments concept to learn about function parameter patterns.
        </Text>
      </View>
    </ScrollView>
  );
}