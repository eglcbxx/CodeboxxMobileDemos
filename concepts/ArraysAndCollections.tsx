/*
Arrays and Collections
----------------------
Demonstrates array operations, methods, and collection manipulation in TypeScript.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding array methods, filtering, mapping, and data transformation.
*/

import React from 'react';
import { Text, View } from 'react-native';

const ArraysAndCollections = () => {
  // Basic array operations
  const fruits = ['apple', 'banana', 'orange', 'grape'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Array methods
  const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const hasBanana = fruits.includes('banana');
  const firstLongFruit = fruits.find(fruit => fruit.length > 5);
  
  // Array manipulation
  const sortedFruits = [...fruits].sort();
  const reversedNumbers = [...numbers].reverse();
  const slicedFruits = fruits.slice(1, 3);
  
  // Set (unique values)
  const uniqueNumbers = [...new Set([1, 2, 2, 3, 3, 4])];

  return (
    <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Arrays and Collections Examples
      </Text>
      <Text>Original: [{fruits.join(', ')}]</Text>
      <Text>Uppercase: [{uppercaseFruits.join(', ')}]</Text>
      <Text>Even numbers: [{evenNumbers.join(', ')}]</Text>
      <Text>Sum: {sum}</Text>
      <Text>Has banana: {hasBanana ? 'Yes' : 'No'}</Text>
      <Text>First long fruit: {firstLongFruit || 'None'}</Text>
      <Text>Sorted: [{sortedFruits.join(', ')}]</Text>
      <Text>Reversed: [{reversedNumbers.slice(0, 5).join(', ')}...]</Text>
      <Text>Sliced(1,3): [{slicedFruits.join(', ')}]</Text>
      <Text>Unique: [{uniqueNumbers.join(', ')}]</Text>
    </View>
  );
};

export default ArraysAndCollections;