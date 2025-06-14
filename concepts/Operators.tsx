/*
Operators
---------
This component demonstrates the use of operators in JavaScript/TypeScript (arithmetic, comparison, logical).

How to use:
1. Use arithmetic operators (+, -, *, /) to perform calculations.
2. Use comparison operators (===, !==, >, <, etc.) to compare values.
3. Use logical operators (&&, ||, !) for boolean logic.

Example:
const sum = 2 + 3;
const isEqual = 5 === sum;
const andLogic = true && false;
*/

import React from 'react';
import { Text, View } from 'react-native';

const Operators = () => {
  // Operators
  const sum = 2 + 3;
  const isEqual = 5 === sum;
  const andLogic = true && false;
  return (
    <View>
      <Text>2 + 3 = {sum}</Text>
      <Text>5 === sum: {isEqual ? 'true' : 'false'}</Text>
      <Text>true && false: {andLogic ? 'true' : 'false'}</Text>
    </View>
  );
};

export default Operators;