/*
Conditional Statements
---------------------
This component demonstrates conditional statements (if/else, switch) in JavaScript/TypeScript.

How to use:
1. Use if/else to execute code based on a condition.
2. Use else if for multiple conditions.
3. Use switch for multi-branch selection based on a value.

Example:
if (value > 5) { ... } else if (value === 5) { ... } else { ... }
switch (value) { case 10: ... break; default: ... }
*/

import React from 'react';
import { Text, View } from 'react-native';

const ConditionalStatements = () => {
  // Conditional statements
  const value: number = 10;
  let result = '';
  if (value > 5) {
    result = 'Greater than 5';
  } else if (value === 5) {
    result = 'Equal to 5';
  } else {
    result = 'Less than 5';
  }
  let switchResult = '';
  switch (value) {
    case 10:
      switchResult = 'Value is 10';
      break;
    default:
      switchResult = 'Value is not 10';
  }
  return (
    <View>
      <Text>If/Else: {result}</Text>
      <Text>Switch: {switchResult}</Text>
    </View>
  );
};

export default ConditionalStatements;