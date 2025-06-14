/*
Parameters and Arguments
-----------------------
This component demonstrates how to use parameters and arguments in functions.

How to use:
1. Define a function with parameters.
2. Call the function with arguments.
3. Use the result in your code.

Example:
function multiply(a, b) { return a * b; }
const result = multiply(4, 5);
*/

import React from 'react';
import { Text, View } from 'react-native';

function multiply(a: number, b: number) {
  return a * b;
}

const ParametersAndArguments = () => {
  // Parameters and arguments
  const result = multiply(4, 5);
  return (
    <View>
      <Text>multiply(4, 5) = {result}</Text>
    </View>
  );
};

export default ParametersAndArguments;