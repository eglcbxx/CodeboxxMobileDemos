/*
ImportExport Demo
=================

What this demo shows:
This demo shows module import/export patterns and dependency management.

What concept you need:
You need the ImportExport concept from: /concepts/ImportExport.tsx

How to copy and use in your project:
1. Copy the ImportExport.tsx file to your concepts folder
2. Copy the import lines below
3. Copy the importexport examples below and paste them in your screen

Code examples to copy:
*/

import { ScrollView, View, Text } from 'react-native';
import ImportExport from '../../../concepts/ImportExport';
import { useThemedStyles } from '@/hooks/useThemedStyles';
{/* Import the importexport concept - copy this line */}

export default function ImportExportDemo() {
  const styles = useThemedStyles();

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>  
      {/* ImportExport concept - copy this component */}
      <ImportExport />
      
      <View style={[styles.contextBox]}>
        <Text style={[styles.contextText]}>
          Copy the ImportExport concept to learn about module organization and code sharing patterns.
        </Text>
      </View>
    </ScrollView>
  );
}