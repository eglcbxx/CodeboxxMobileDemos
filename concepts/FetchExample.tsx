/*
fetch (API for Network Requests)
-------------------------------
This component demonstrates how to use the fetch API (or similar) for network requests in React Native.

How to use:
1. Create a function to fetch data (can use fetch or simulate with setTimeout).
2. Call the function on a button press or in useEffect.
3. Update state with the fetched data.

Example:
const fetchData = async () => { const res = await fetch(url); const data = await res.json(); };
*/

import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const FetchExample = () => {
  // fetch (API for network requests)
  const [data, setData] = useState<string>('');
  const fetchData = async () => {
    setData('Loading...');
    // Simulate fetch
    setTimeout(() => setData('Fetched data!'), 500);
  };
  return (
    <View>
      <Button title="Fetch Data" onPress={fetchData} />
      <Text>{data}</Text>
    </View>
  );
};

export default FetchExample;