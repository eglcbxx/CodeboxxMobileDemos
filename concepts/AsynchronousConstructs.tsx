/*
Asynchronous Constructs (Promises, async/await)
----------------------------------------------
This component demonstrates how to use asynchronous constructs in JavaScript/TypeScript.

How to use:
1. Use Promises or async/await to handle asynchronous operations.
2. Use useEffect to trigger async code in React components.
3. Update state when async operation completes.

Example:
useEffect(() => { async function fetchData() { ... } fetchData(); }, []);
*/

import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const AsynchronousConstructs = () => {
  // Asynchronous constructs (promises, async/await)
  const [data, setData] = useState<string>('Loading...');
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData('Async data loaded!');
    };
    fetchData();
  }, []);
  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

export default AsynchronousConstructs;