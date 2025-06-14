/*
Functions and Methods
--------------------
This component demonstrates how to define and use functions and methods in JavaScript/TypeScript.

How to use:
1. Define a function using function keyword or arrow syntax.
2. Call the function with arguments.
3. Use the return value in your code.

Example:
function greet(name: string) { return `Hello, ${name}!`; }
const message = greet('World');
*/

import React from 'react';
import { Text, View } from 'react-native';

function greet(name: string) {
  return `Hello, ${name}!`;
}

const FunctionsAndMethods = () => {
  // Functions and methods
  const message = greet('World');
  return (
    <View>
      <Text>Function result: {message}</Text>
    </View>
  );
};

export default FunctionsAndMethods;