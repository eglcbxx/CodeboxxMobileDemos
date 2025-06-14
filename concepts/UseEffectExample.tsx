/*
useEffect (React Effect Hook)
----------------------------
This component demonstrates how to use the useEffect hook in React.

How to use:
1. Import useEffect from 'react'.
2. Call useEffect to run code after render or when dependencies change.
3. Use it for side effects like data fetching or subscriptions.

Example:
useEffect(() => { ... }, []);
*/

import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const UseEffectExample = () => {
  // useEffect (React effect hook)
  const [message, setMessage] = useState('');
  useEffect(() => {
    setMessage('useEffect ran!');
  }, []);
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default UseEffectExample;