/*
LoadingSpinner Component
------------------------
A clean loading indicator component using React Native's ActivityIndicator.

Copy this file to your project's components folder and import it where needed.
Perfect for showing loading states during API calls, navigation, and async operations.
*/

import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

interface LoadingSpinnerProps {
  size?: 'small' | 'large';
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'large', color = '#007bff' }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default LoadingSpinner;