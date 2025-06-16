/*
Type Declarations
-----------------
Demonstrates TypeScript type definitions including interfaces, types, and unions.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding TypeScript type system and custom type definitions.
*/

import React from 'react';
import { Text, View } from 'react-native';

// Type aliases
type Status = 'loading' | 'success' | 'error';
type StringOrNumber = string | number;

// Interface definitions
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

interface Product {
  id: number;
  title: string;
  price: number;
  category?: string; // Optional property
}

const TypeDeclarations = () => {
  // Using type aliases
  const currentStatus: Status = 'success';
  const flexibleValue: StringOrNumber = 42;
  
  // Using interfaces
  const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    isActive: true
  };
  
  const product: Product = {
    id: 101,
    title: 'TypeScript Guide',
    price: 29.99
  };

  // Function with typed parameters
  const formatUser = (userData: User): string => {
    return `${userData.name} (${userData.email})`;
  };

  return (
    <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Type Declarations Examples
      </Text>
      <Text>Status: {currentStatus}</Text>
      <Text>Flexible value: {flexibleValue}</Text>
      <Text>User: {formatUser(user)}</Text>
      <Text>Active: {user.isActive ? 'Yes' : 'No'}</Text>
      <Text>Product: {product.title} - ${product.price}</Text>
      <Text>Category: {product.category || 'Uncategorized'}</Text>
    </View>
  );
};

export default TypeDeclarations;