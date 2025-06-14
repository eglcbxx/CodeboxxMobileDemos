/*
Import/Export (Modules)
-----------------------
This component demonstrates how to import and export modules in JavaScript/TypeScript.

How to use:
1. Export a component or function from one file using 'export'.
2. Import it in another file using 'import'.
3. Use the imported component/function in your code.

Example:
In VariableDeclaration.tsx: export default VariableDeclaration;
In this file: import VariableDeclaration from './VariableDeclaration';
*/


import React from 'react';
import { Text, View } from 'react-native';
import OtherComponent from './VariableDeclaration';

const ImportExport = () => {
  // Import/export (modules)
  return (
    <View>
      <Text>Import/Export Example:</Text>
      <OtherComponent />
    </View>
  );
};

export default ImportExport;