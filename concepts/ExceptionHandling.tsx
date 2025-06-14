/*
Exception Handling
-----------------
This component demonstrates how to handle exceptions (errors) using try/catch/finally in JavaScript/TypeScript.

How to use:
1. Wrap code that may throw an error in a try block.
2. Use catch to handle the error.
3. Optionally use finally for cleanup code that runs regardless of error.

Example:
try { ... } catch (error) { ... } finally { ... }
*/

import React from 'react';
import { Text, View } from 'react-native';

const ExceptionHandling = () => {
  // Exception handling
  let message = '';
  try {
    throw new Error('Oops!');
  } catch (error: any) {
    message = error.message;
  } finally {
    message += ' (handled)';
  }
  return (
    <View>
      <Text>Exception: {message}</Text>
    </View>
  );
};

export default ExceptionHandling;