/*
AlertBox Component
------------------
Shows a dismissible alert/message box with different types.

Usage:
import AlertBox from './components/AlertBox';

<AlertBox message="This is an info alert!" type="info" onClose={() => setShow(false)} />
<AlertBox message="Success!" type="success" />

Props:
- message: string // Alert message
- type?: 'success' | 'error' | 'info' | 'warning' // Alert type (default: 'info')
- onClose?: () => void // Optional close handler
*/

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface AlertBoxProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  onClose?: () => void;
}

const colors = {
  success: '#d4edda',
  error: '#f8d7da',
  info: '#d1ecf1',
  warning: '#fff3cd',
};

const AlertBox: React.FC<AlertBoxProps> = ({ message, type = 'info', onClose }) => (
  <View style={[styles.container, { backgroundColor: colors[type] }]}> 
    <Text style={styles.text}>{message}</Text>
    {onClose && (
      <TouchableOpacity onPress={onClose} style={styles.close}>
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 6,
    marginVertical: 4,
  },
  text: {
    flex: 1,
    fontSize: 14,
  },
  close: {
    marginLeft: 8,
    padding: 4,
  },
  closeText: {
    fontSize: 18,
    color: '#333',
  },
});

export default AlertBox;