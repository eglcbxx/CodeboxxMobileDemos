/*
useEffect Example
-----------------
React useEffect hook patterns for side effects, lifecycle management, and data fetching.

Copy this file to your project's concepts folder and import it where needed.
Perfect for implementing component lifecycle effects and async operations.
*/

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UseEffectExample = () => {
  // State for different useEffect examples
  const [mountMessage, setMountMessage] = useState('Component not mounted yet');
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  // Example 1: useEffect with no dependencies (runs after every render)
  useEffect(() => {
    console.log('This runs after every render');
  });

  // Example 2: useEffect with empty dependency array (runs only on mount)
  useEffect(() => {
    setMountMessage('Component mounted successfully!');
    console.log('Component mounted');
    
    // Cleanup function (runs on unmount)
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array

  // Example 3: useEffect with dependencies (runs when counter changes)
  useEffect(() => {
    console.log(`Counter changed to: ${counter}`);
    
    // Side effect based on counter value
    if (counter > 0 && counter % 5 === 0) {
      console.log('Counter is divisible by 5!');
    }
  }, [counter]); // Runs when counter changes

  // Example 4: useEffect with timer/interval (cleanup required)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    // Cleanup function to clear interval
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty array = runs once on mount

  // Example 5: useEffect for data fetching
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setUserData({
          name: 'John Doe',
          email: 'john@example.com'
        });
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []); // Fetch data on mount

  // Example 6: useEffect with conditional execution
  useEffect(() => {
    if (counter > 10) {
      console.log('Counter exceeded 10!');
      // Could trigger some action here
    }
  }, [counter]);

  // Example 7: useEffect for event listeners (with cleanup)
  useEffect(() => {
    // In a real React Native app, you might listen to dimension changes
    const updateWidth = () => {
      setWindowWidth(Math.floor(Math.random() * 400) + 300); // Simulated
    };

    const interval = setInterval(updateWidth, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Example 8: useEffect with multiple dependencies
  useEffect(() => {
    if (userData && counter > 5) {
      console.log(`User ${userData.name} has been active with ${counter} interactions`);
    }
  }, [userData, counter]); // Runs when either userData or counter changes

  // Helper function to increment counter
  const incrementCounter = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Component Lifecycle</Text>
        <Text style={styles.example}>Mount Status: {mountMessage}</Text>
        <Text style={styles.example}>Timer: {timer} seconds</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>State-Dependent Effects</Text>
        <Text style={styles.example}>Counter: {counter}</Text>
        <Text 
          style={[styles.example, styles.clickable]} 
          onPress={incrementCounter}
        >
          Tap to increment counter
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Data Fetching</Text>
        {userData ? (
          <>
            <Text style={styles.example}>User: {userData.name}</Text>
            <Text style={styles.example}>Email: {userData.email}</Text>
          </>
        ) : (
          <Text style={styles.example}>Loading user data...</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Event Listeners</Text>
        <Text style={styles.example}>Simulated Width: {windowWidth}px</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>useEffect Patterns</Text>
        <Text style={styles.note}>✓ No deps: Runs after every render</Text>
        <Text style={styles.note}>✓ Empty []: Runs once on mount</Text>
        <Text style={styles.note}>✓ [dep]: Runs when dependency changes</Text>
        <Text style={styles.note}>✓ Cleanup: Return function for cleanup</Text>
        <Text style={styles.note}>✓ Multiple deps: [dep1, dep2]</Text>
        <Text style={styles.note}>✓ Conditional: if statements inside effect</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  section: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  example: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    fontFamily: 'monospace',
  },
  clickable: {
    color: '#0066cc',
    textDecorationLine: 'underline',
  },
  note: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
});

export default UseEffectExample;