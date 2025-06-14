/*
Variable Declaration and Assignment
----------------------------------
This component demonstrates how to declare and assign variables in JavaScript/TypeScript.

How to use:
1. Declare a variable using const, let, or var.
2. Assign a value to the variable.
3. Use the variable in your code (e.g., display it in JSX).

Example:
const message = 'Hello, variable!';
<Text>{message}</Text>
*/

import React from 'react';
import { Text, View } from 'react-native';

const VariableDeclaration = () => {
  // Variable declaration and assignment
  const message = 'Hello, variable!';
  return (
    <View>
      <Text>Variable value: {message}</Text>
    </View>
  );
};

export default VariableDeclaration;