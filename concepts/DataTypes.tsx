/*
Data Types
----------
Demonstrates TypeScript data types including primitives, arrays, and objects.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding TypeScript type annotations and data structure usage.
*/

import React from 'react';
import { Text, View } from 'react-native';

const DataTypes = () => {
  // TypeScript data types with explicit annotations
  const stringValue: string = 'Hello TypeScript';
  const numberValue: number = 42;
  const booleanValue: boolean = true;
  const arrayValue: number[] = [1, 2, 3, 4, 5];
  const objectValue: { name: string; age: number } = { name: 'John', age: 30 };
  const nullValue: null = null;
  const undefinedValue: undefined = undefined;

  return (
    <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        TypeScript Data Types
      </Text>
      <Text>String: {stringValue}</Text>
      <Text>Number: {numberValue}</Text>
      <Text>Boolean: {booleanValue ? 'true' : 'false'}</Text>
      <Text>Array: [{arrayValue.join(', ')}]</Text>
      <Text>Object: {objectValue.name}, {objectValue.age} years old</Text>
      <Text>Null: {nullValue === null ? 'null' : 'not null'}</Text>
      <Text>Undefined: {undefinedValue === undefined ? 'undefined' : 'defined'}</Text>
    </View>
  );
};

export default DataTypes;