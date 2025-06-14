/*
Type Declarations
----------------
This component demonstrates how to declare types in TypeScript.

How to use:
1. Use the 'type' keyword to define a custom type.
2. Use the type in variable declarations or function signatures.

Example:
type MyType = string | number;
const value: MyType = 'TypeScript';
*/

import React from 'react';
import { Text, View } from 'react-native';

type MyType = string | number;

const TypeDeclarations = () => {
  // Type declarations (in typed languages)
  const value: MyType = 'TypeScript';
  return (
    <View>
      <Text>Type: {value}</Text>
    </View>
  );
};

export default TypeDeclarations;