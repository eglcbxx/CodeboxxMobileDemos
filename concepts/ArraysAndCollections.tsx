/*
Arrays and Collections
---------------------
This component demonstrates how to use arrays and collections in JavaScript/TypeScript.

How to use:
1. Declare an array using [].
2. Add or access elements using index or array methods.
3. Use array methods like join, map, filter, etc.

Example:
const arr = ['a', 'b', 'c'];
arr.join(', ');
*/

import React from 'react';
import { Text, View } from 'react-native';

const ArraysAndCollections = () => {
  // Arrays and collections
  const arr = ['a', 'b', 'c'];
  return (
    <View>
      <Text>Array: {arr.join(', ')}</Text>
    </View>
  );
};

export default ArraysAndCollections;