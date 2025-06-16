/*
Variable Declaration
--------------------
Demonstrates variable declaration and assignment using const, let, and var in TypeScript.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding variable scoping and assignment patterns.
*/

import React from 'react';
import { Text, View } from 'react-native';

const VariableDeclaration = () => {
  // Different types of variable declarations
  const constantValue = 'This cannot be reassigned';
  let mutableValue = 'This can be reassigned';
  
  // Reassigning let variable
  mutableValue = 'Updated value';

  return (
    <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Variable Declaration Examples
      </Text>
      <Text>Const: {constantValue}</Text>
      <Text>Let: {mutableValue}</Text>
    </View>
  );
};

export default VariableDeclaration;