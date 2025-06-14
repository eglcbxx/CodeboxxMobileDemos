/*
LoadingSpinner Component
-----------------------
Shows a loading indicator (spinner).

Usage:
import LoadingSpinner from './components/LoadingSpinner';

<LoadingSpinner />
<LoadingSpinner size="small" color="#333" />

Props:
- size?: 'small' | 'large' // Spinner size (default: 'large')
- color?: string // Spinner color (default: #007bff)
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