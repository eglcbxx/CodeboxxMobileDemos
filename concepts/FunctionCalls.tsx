/*
Function Calls
--------------
This component demonstrates how to call functions in JavaScript/TypeScript.

How to use:
1. Define a function.
2. Call the function with the required arguments.
3. Use the result in your code (e.g., display it in JSX).

Example:
function add(a, b) { return a + b; }
const result = add(2, 3);
*/

import React from 'react';
import { Text, View } from 'react-native';

function add(a: number, b: number) {
  return a + b;
}

const FunctionCalls = () => {
  // Function calls
  const result = add(2, 3);
  return (
    <View>
      <Text>add(2, 3) = {result}</Text>
    </View>
  );
};

export default FunctionCalls;