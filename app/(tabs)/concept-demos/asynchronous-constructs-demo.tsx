/*
AsynchronousConstructs Demo
===========================

What this demo shows:
This demo shows async/await patterns, promises, and asynchronous programming.

What concept you need:
You need the AsynchronousConstructs concept from: /concepts/AsynchronousConstructs.tsx

How to copy and use in your project:
1. Copy the AsynchronousConstructs.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the asynchronousconstructs examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import AsynchronousConstructs from '../../../concepts/AsynchronousConstructs';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the asynchronousconstructs concept - copy this line */}

export default function AsynchronousConstructsDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      {/* AsynchronousConstructs concept - copy this component */}
      <AsynchronousConstructs />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the AsynchronousConstructs concept to learn about asynchronous programming patterns.
        </Text>
      </View>
    </ScrollView>
  );
}