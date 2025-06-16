/*
ExceptionHandling Demo
======================

What this demo shows:
This demo demonstrates try/catch patterns and error handling strategies.

What concept you need:
You need the ExceptionHandling concept from: /concepts/ExceptionHandling.tsx

How to copy and use in your project:
1. Copy the ExceptionHandling.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the exceptionhandling examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import ExceptionHandling from '../../../concepts/ExceptionHandling';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the exceptionhandling concept - copy this line */}

export default function ExceptionHandlingDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>   
      {/* ExceptionHandling concept - copy this component */}
      <ExceptionHandling />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the ExceptionHandling concept to learn about error handling and defensive programming.
        </Text>
      </View>
    </ScrollView>
  );
}