/*
Loops
-----
Demonstrates different loop types including for, forEach, map, and while loops.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding iteration patterns and array processing techniques.
*/

import React from 'react';
import { Text, View } from 'react-native';

const Loops = () => {
  const numbers = [1, 2, 3, 4, 5];
  const fruits = ['apple', 'banana', 'orange'];

  // For loop - traditional iteration
  let forLoopSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    forLoopSum += numbers[i];
  }

  // For...of loop - modern array iteration
  let forOfSum = 0;
  for (const num of numbers) {
    forOfSum += num;
  }

  // forEach - functional array iteration
  let forEachResult: string[] = [];
  fruits.forEach((fruit, index) => {
    forEachResult.push(`${index + 1}. ${fruit}`);
  });

  // Map - transformation
  const doubled = numbers.map(num => num * 2);

  // While loop
  let whileCount = 0;
  let whileSum = 0;
  while (whileCount < 3) {
    whileSum += whileCount;
    whileCount++;
  }

  return (
    <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Loop Examples
      </Text>
      <Text>For loop sum: {forLoopSum}</Text>
      <Text>For...of sum: {forOfSum}</Text>
      <Text>forEach list: {forEachResult.join(', ')}</Text>
      <Text>Map doubled: [{doubled.join(', ')}]</Text>
      <Text>While loop sum: {whileSum}</Text>
    </View>
  );
};

export default Loops;