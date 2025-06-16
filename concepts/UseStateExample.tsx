/*
useState Hook
-------------
Demonstrates React's useState hook for managing component state and reactivity.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding state management, re-rendering, and interactive components.
*/

import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const UseStateExample = () => {
  // State for counter
  const [count, setCount] = useState(0);
  
  // State for text input
  const [name, setName] = useState('');
  
  // State for boolean toggle
  const [isVisible, setIsVisible] = useState(true);
  
  // State for object
  const [user, setUser] = useState({ name: 'John', age: 25 });

  return (
    <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8, gap: 12 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        useState Hook Examples
      </Text>
      
      <View>
        <Text>Counter: {count}</Text>
        <View style={{ flexDirection: 'row', gap: 8, marginTop: 4 }}>
          <Button title="+" onPress={() => setCount(count + 1)} />
          <Button title="-" onPress={() => setCount(count - 1)} />
          <Button title="Reset" onPress={() => setCount(0)} />
        </View>
      </View>

      <View>
        <Text>Name: {name || 'Enter a name'}</Text>
        <Button title="Set Name" onPress={() => setName('React Developer')} />
      </View>

      <View>
        <Text>Visibility: {isVisible ? 'Visible' : 'Hidden'}</Text>
        <Button title="Toggle" onPress={() => setIsVisible(!isVisible)} />
      </View>

      <View>
        <Text>User: {user.name}, Age: {user.age}</Text>
        <Button 
          title="Update Age" 
          onPress={() => setUser({ ...user, age: user.age + 1 })} 
        />
      </View>
    </View>
  );
};

export default UseStateExample;