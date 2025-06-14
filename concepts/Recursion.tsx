/*
Recursion
---------
This component demonstrates how to use recursion in JavaScript/TypeScript.

How to use:
1. Define a function that calls itself with a different argument.
2. Provide a base case to stop recursion.
3. Use the recursive function as needed.

Example:
function factorial(n) { if (n <= 1) return 1; return n * factorial(n - 1); }
*/

import React from 'react';
import { Text, View } from 'react-native';

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const Recursion = () => {
  // Recursion
  const result = factorial(5);
  return (
    <View>
      <Text>factorial(5) = {result}</Text>
    </View>
  );
};

export default Recursion;