/*
Data Types Demo
---------------
This demo shows how to use the DataTypes concept component to illustrate primitive and complex data types in TypeScript/JavaScript.

Usage Steps:
1. Import the DataTypes concept component:
   import DataTypes from '@/concepts/DataTypes';

2. Use the component in your JSX:
   <DataTypes />

Details:
- This component demonstrates different data types (string, number, boolean, array, object, etc.).
- It is intended for educational purposes and can be used in any screen or demo to show type usage.

To use DataTypes in another component, import it and render it directly.
*/

import DataTypes from '@/concepts/DataTypes';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function DataTypesDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Data Types Demo</Text>
      <DataTypes />
    </ScrollView>
  );
}
