/*
Fetch API Example
-----------------
Demonstrates HTTP requests using fetch API with error handling and loading states.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding API calls, async data fetching, and network error handling.
*/

import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

interface User {
  id: number;
  name: string;
  email: string;
}

const FetchExample = () => {
  const [data, setData] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Simulated API fetch
  const fetchSimulatedData = async () => {
    setLoading(true);
    setError('');
    try {
      // Simulate network delay and potential error
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.7) {
            reject(new Error('Network error occurred'));
          } else {
            resolve('Success');
          }
        }, 1000);
      });
      
      setData('Simulated data successfully fetched!');
    } catch (err: any) {
      setError(err.message);
      setData('');
    } finally {
      setLoading(false);
    }
  };

  // Fetch users on mount
  useEffect(() => {
    const loadUsers = async () => {
      try {
        // Simulate fetching users
        await new Promise(resolve => setTimeout(resolve, 500));
        const mockUsers: User[] = [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
        ];
        setUsers(mockUsers);
      } catch (err) {
        console.error('Failed to load users:', err);
      }
    };
    
    loadUsers();
  }, []);

  // Real fetch example (commented for demo purposes)
  const fetchRealData = async () => {
    setLoading(true);
    try {
      // Example: const response = await fetch('https://jsonplaceholder.typicode.com/users');
      // const jsonData = await response.json();
      // setUsers(jsonData);
      
      // Simulated for demo
      await new Promise(resolve => setTimeout(resolve, 800));
      setData('Real API call would go here');
    } catch (err: any) {
      setError(`Fetch failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8, gap: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Fetch API Examples
      </Text>
      
      <View>
        <Button title="Fetch Simulated Data" onPress={fetchSimulatedData} />
        {loading && <Text>Loading...</Text>}
        {error && <Text style={{ color: 'red' }}>Error: {error}</Text>}
        {data && <Text style={{ color: 'green' }}>{data}</Text>}
      </View>

      <View>
        <Text style={{ fontWeight: 'bold' }}>Auto-loaded Users:</Text>
        {users.map(user => (
          <Text key={user.id}>• {user.name} ({user.email})</Text>
        ))}
      </View>

      <Button title="Fetch Real API" onPress={fetchRealData} />
      
      <Text style={{ fontSize: 12, color: '#666', fontStyle: 'italic' }}>
        Uncomment real fetch code for actual API calls
      </Text>
    </View>
  );
};

export default FetchExample;