/*
FetchExample Demo
=================

What this demo shows:
This demo demonstrates API calling patterns with fetch and async data handling.

What concept you need:
You need the FetchExample concept from: /concepts/FetchExample.tsx

How to copy and use in your project:
1. Copy the FetchExample.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the fetchexample examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import FetchExample from '../../../concepts/FetchExample';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the fetchexample concept - copy this line */}

export default function FetchExampleDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>    
      {/* FetchExample concept - copy this component */}
      <FetchExample />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the FetchExample concept to learn about API integration and data fetching patterns.
        </Text>
      </View>
    </ScrollView>
  );
}