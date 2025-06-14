/*
Break and Continue Statements
----------------------------
This component demonstrates how to use break and continue in loops in JavaScript/TypeScript.

How to use:
1. Use break to exit a loop early.
2. Use continue to skip the current iteration and continue with the next.

Example:
for (let i = 0; i < 5; i++) { if (i === 3) break; }
for (let i = 0; i < 5; i++) { if (i === 3) continue; }
*/

import React from 'react';
import { Text, View } from 'react-native';

const BreakContinue = () => {
  // Break and continue statements
  let breakSum = 0;
  for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    breakSum += i;
  }
  let continueSum = 0;
  for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    continueSum += i;
  }
  return (
    <View>
      <Text>Break sum (stops at 3): {breakSum}</Text>
      <Text>Continue sum (skips 3): {continueSum}</Text>
    </View>
  );
};

export default BreakContinue;