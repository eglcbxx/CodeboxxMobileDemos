/*
Conditional Statements
----------------------
Demonstrates if/else statements, ternary operators, and switch cases in TypeScript.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding conditional logic and control flow patterns.
*/

import React from 'react';
import { Text, View } from 'react-native';

const ConditionalStatements = () => {
  const score = 85;
  const weather = 'sunny';
  const userRole: 'admin' | 'user' | 'guest' | 'none' = 'admin' as 'admin' | 'user' | 'guest' | 'none';

  // If/else conditional
  let grade = '';
  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else {
    grade = 'F';
  }

  // Ternary operator
  const weatherMessage = weather === 'sunny' ? 'Perfect day!' : 'Stay inside';

  // Switch statement
  let permissions = '';
  switch (userRole) {
    case 'admin':
      permissions = 'Full access';
      break;
    case 'user':
      permissions = 'Limited access';
      break;
    case 'guest':
      permissions = 'Read-only access';
      break;
    default:
      permissions = 'No access';
  }

  return (
    <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Conditional Statements Examples
      </Text>
      <Text>Score: {score} → Grade: {grade}</Text>
      <Text>Weather: {weather} → {weatherMessage}</Text>
      <Text>Role: {userRole} → {permissions}</Text>
      <Text>Even/Odd: {score % 2 === 0 ? 'Even' : 'Odd'}</Text>
    </View>
  );
};

export default ConditionalStatements;