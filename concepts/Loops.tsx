/*
Loops
-----
This component demonstrates different types of loops in JavaScript/TypeScript (for, forEach, while).

How to use:
1. Use a for loop to iterate a set number of times.
2. Use forEach to iterate over array elements.
3. Use a while loop to repeat code while a condition is true.

Example:
for (let i = 0; i < arr.length; i++) { ... }
arr.forEach((num) => { ... });
while (count < 2) { ... }
*/

import React from 'react';
import { Text, View } from 'react-native';

const Loops = () => {
  // Loops
  const arr = [1, 2, 3];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let forEachResult = '';
  arr.forEach((num) => {
    forEachResult += num + ' ';
  });
  let whileResult = 0;
  let count = 0;
  while (count < 2) {
    whileResult += count;
    count++;
  }
  return (
    <View>
      <Text>For loop sum: {sum}</Text>
      <Text>forEach: {forEachResult.trim()}</Text>
      <Text>While loop: {whileResult}</Text>
    </View>
  );
};

export default Loops;