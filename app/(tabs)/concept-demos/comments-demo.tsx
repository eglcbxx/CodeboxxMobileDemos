/*
Comments Demo
=============

What this demo shows:
This demo demonstrates different comment styles and documentation patterns in TypeScript.

What concept you need:
You need the Comments concept from: /concepts/Comments.tsx

How to copy and use in your project:
1. Copy the Comments.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the comments examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import Comments from '../../../concepts/Comments';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the comments concept - copy this line */}

export default function CommentsDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>  
      {/* Comments concept - copy this component */}
      <Comments />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the Comments concept to learn about single-line, multi-line, and JSDoc comment patterns.
        </Text>
      </View>
    </ScrollView>
  );
}