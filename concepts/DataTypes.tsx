/*
Data Types
----------
This component demonstrates the use of different data types in JavaScript/TypeScript.

How to use:
1. Declare variables with different types (string, number, boolean, array, object).
2. Assign values of the correct type to each variable.
3. Use these variables in your code (e.g., display them in JSX).

Example:
const str: string = 'String';
const num: number = 42;
const bool: boolean = true;
const arr: number[] = [1, 2, 3];
const obj = { key: 'value' };
*/

import React from 'react';
import { Text, View } from 'react-native';

const DataTypes = () => {
  // Data types
  const str: string = 'String';
  const num: number = 42;
  const bool: boolean = true;
  const arr: number[] = [1, 2, 3];
  const obj = { key: 'value' };
  return (
    <View>
      <Text>String: {str}</Text>
      <Text>Number: {num}</Text>
      <Text>Boolean: {bool ? 'true' : 'false'}</Text>
      <Text>Array: {arr.join(', ')}</Text>
      <Text>Object: {obj.key}</Text>
    </View>
  );
};

export default DataTypes;