/*
useState (React State Hook)
--------------------------
This component demonstrates how to use the useState hook in React.

How to use:
1. Import useState from 'react'.
2. Call useState to create a state variable and setter.
3. Use the state variable in your component and update it with the setter.

Example:
const [count, setCount] = useState(0);
*/

import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const UseStateExample = () => {
  // useState (React state hook)
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default UseStateExample;