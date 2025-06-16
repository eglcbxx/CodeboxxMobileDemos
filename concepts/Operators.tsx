/*
Operators
---------
Demonstrates arithmetic, comparison, logical, and assignment operators in TypeScript.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding operator precedence, comparisons, and logical expressions.
*/

import React from 'react';
import { Text, View } from 'react-native';

const Operators = () => {
  // Arithmetic operators
  const a: number = 10, b: number = 3;
  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;
  const division = a / b;
  const modulo = a % b;
  const power = a ** 2;

  // Comparison operators
  const isEqual = a === b;
  const isNotEqual = a !== b;
  const isGreater = a > b;
  const isLessOrEqual = a <= b;

  // Logical operators
  const and = true && false;
  const or = true || false;
  const not = !true;

  // Assignment operators
  let counter = 5;
  counter += 3; // counter = counter + 3
  const postIncrement = counter++;
  const preIncrement = ++counter;

  // Ternary operator
  const status = a > b ? 'Greater' : 'Less or Equal';

  // Nullish coalescing and optional chaining
  const user: { name: string; profile?: { photo?: string } | null } = { name: 'John', profile: null };
  const userName = user.name ?? 'Anonymous';
  const profilePhoto = user.profile?.photo ?? 'default.jpg';

  return (
    <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Operators Examples
      </Text>
      <Text>Arithmetic: {a} + {b} = {addition}</Text>
      <Text>Division: {a} / {b} = {division.toFixed(2)}</Text>
      <Text>Modulo: {a} % {b} = {modulo}</Text>
      <Text>Power: {a}² = {power}</Text>
      <Text>Equal: {a} === {b} = {isEqual ? 'true' : 'false'}</Text>
      <Text>Greater: {a} {'>'}  {b} = {isGreater ? 'true' : 'false'}</Text>
      <Text>AND: true && false = {and ? 'true' : 'false'}</Text>
      <Text>OR: true || false = {or ? 'true' : 'false'}</Text>
      <Text>NOT: !true = {not ? 'true' : 'false'}</Text>
      <Text>Ternary: {status}</Text>
      <Text>Nullish: {userName}</Text>
      <Text>Optional chain: {profilePhoto}</Text>
      <Text>Counter after ops: {counter}</Text>
    </View>
  );
};

export default Operators;