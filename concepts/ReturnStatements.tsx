/*
Return Statements
----------------
This component demonstrates how to use return statements in functions.

How to use:
1. Define a function that returns a value.
2. Call the function and store the result.
3. Use the returned value in your code.

Example:
function getGreeting() { return 'Hello!'; }
const message = getGreeting();
*/

import React from 'react';
import { Text, View } from 'react-native';

function getGreeting(): string {
  return 'Hello from return statement!';
}

const ReturnStatements = () => {
  // Return statements
  const message = getGreeting();
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default ReturnStatements;