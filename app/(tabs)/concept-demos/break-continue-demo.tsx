/*
BreakContinue Demo
==================

What this demo shows:
This demo shows break and continue statements for loop control flow.

What concept you need:
You need the BreakContinue concept from: /concepts/BreakContinue.tsx

How to copy and use in your project:
1. Copy the BreakContinue.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the breakcontinue examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import BreakContinue from '../../../concepts/BreakContinue';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the breakcontinue concept - copy this line */}

export default function BreakContinueDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      {/* BreakContinue concept - copy this component */}
      <BreakContinue />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the BreakContinue concept to learn about loop control and flow interruption patterns.
        </Text>
      </View>
    </ScrollView>
  );
}