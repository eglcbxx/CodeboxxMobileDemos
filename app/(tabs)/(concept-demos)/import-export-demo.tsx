/*
Import/Export Demo
------------------
This demo shows how to use the ImportExport concept component to illustrate module import and export syntax in JavaScript/TypeScript.

Usage Steps:
1. Import the ImportExport concept component:
   import ImportExport from '@/concepts/ImportExport';

2. Use the component in your JSX:
   <ImportExport />

Details:
- This component demonstrates how to import and export functions, classes, and variables between modules.
- It is intended for educational purposes and can be used in any screen or demo to show module organization.

To use ImportExport in another component, import it and render it directly.
*/

import ImportExport from '@/concepts/ImportExport';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function ImportExportDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Import/Export Demo</Text>
      <ImportExport />
    </ScrollView>
  );
}
