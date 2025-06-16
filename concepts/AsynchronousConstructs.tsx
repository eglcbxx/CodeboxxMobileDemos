/*
Asynchronous Constructs
-----------------------
Demonstrates Promises, async/await, and asynchronous patterns in React components.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding async operations, state updates, and useEffect patterns.
*/

import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const AsynchronousConstructs = () => {
  const [promiseData, setPromiseData] = useState<string>('Not loaded');
  const [asyncData, setAsyncData] = useState<string>('Loading...');
  const [fetchStatus, setFetchStatus] = useState<string>('Ready');

  // Promise-based operation
  const loadWithPromise = () => {
    setPromiseData('Loading...');
    new Promise<string>((resolve) => {
      setTimeout(() => resolve('Promise resolved!'), 1000);
    }).then((result) => {
      setPromiseData(result);
    });
  };

  // Async/await operation on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setAsyncData('Async data loaded!');
      } catch {
        setAsyncData('Error loading data');
      }
    };
    fetchData();
  }, []);

  // Manual async operation
  const handleAsyncOperation = async () => {
    setFetchStatus('Fetching...');
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFetchStatus('Success! Data fetched');
    } catch {
      setFetchStatus('Error occurred');
    }
  };

  // Multiple concurrent operations
  const [multiData, setMultiData] = useState<string[]>([]);
  const loadMultipleAsync = async () => {
    setMultiData(['Loading task 1...', 'Loading task 2...', 'Loading task 3...']);
    
    const tasks = [
      new Promise<string>((resolve) => setTimeout(() => resolve('Task 1 complete'), 800)),
      new Promise<string>((resolve) => setTimeout(() => resolve('Task 2 complete'), 1200)),
      new Promise<string>((resolve) => setTimeout(() => resolve('Task 3 complete'), 600)),
    ];

    try {
      const results = await Promise.all(tasks);
      setMultiData(results);
    } catch {
      setMultiData(['Error in one or more tasks']);
    }
  };

  return (
    <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8, gap: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Asynchronous Operations Examples
      </Text>
      
      <View>
        <Text>Promise result: {promiseData}</Text>
        <Button title="Load with Promise" onPress={loadWithPromise} />
      </View>

      <Text>Auto-loaded data: {asyncData}</Text>
      
      <View>
        <Text>Manual fetch: {fetchStatus}</Text>
        <Button title="Fetch Async" onPress={handleAsyncOperation} />
      </View>

      <View>
        <Text>Multiple tasks:</Text>
        {multiData.map((item, index) => (
          <Text key={index}>• {item}</Text>
        ))}
        <Button title="Load Multiple" onPress={loadMultipleAsync} />
      </View>
    </View>
  );
};

export default AsynchronousConstructs;