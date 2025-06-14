/*
Comments
--------
This component demonstrates how to use comments in JavaScript/TypeScript.

How to use:
1. Use // for single-line comments.
2. Use /* ... * / for multi-line comments.
3. Comments are ignored by the JavaScript engine and are for developers only.
*/

// Example:
// This is a single-line comment
/*  
  This 
  is a 
  multi-line 
  comment 
*/

import React from 'react';
import { Text, View } from 'react-native';

const Comments = () => {
  // This is a single-line comment
  /* This is a multi-line comment */
  return (
    <View>
      <Text>Check the code for comments!</Text>
    </View>
  );
};

export default Comments;