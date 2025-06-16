/*
Standard Components Demo
=======================

What this demo shows:
This demo shows how to use standard React Native Text and View components with consistent styling for optimal visibility.

What component you need:
You need the standard Text and View components from React Native (no custom components required).

How to copy and use in your project:
1. Copy the import lines below
2. Copy the Text and View examples below and paste them in your screen
3. All components use explicit colors for consistent visibility

Code examples to copy:
*/

import { ScrollView, Text, View } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';

export default function ThemedDemo() {
  const styles = useThemedStyles();
  return (
    <ScrollView style={{ flex: 1, padding: 16, ...styles.scrollViewBackground }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, ...styles.text }}>
        Standard Components Demo
      </Text>

      {/* Standard text example - copy this View and Text components */}
      <View style={{ ...styles.lightCardBackground, padding: 16, borderRadius: 8, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
          Standard Text
        </Text>
        <Text style={{ lineHeight: 22, ...styles.text }}>
          This text uses consistent black color for optimal readability.
          Standard styling ensures visibility across all devices!
        </Text>
      </View>

      {/* Colored text examples - copy this View and Text components */}
      <View style={{ ...styles.lightCardBackground, padding: 16, borderRadius: 8, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
          Colored Text Examples
        </Text>
        <Text style={{ marginBottom: 8, color: '#007aff' }}>
          Blue text with good contrast and visibility
        </Text>
        <Text style={{ marginBottom: 8, color: '#34c759' }}>
          Green text that&apos;s easily readable
        </Text>
        <Text style={{ color: '#ff3b30' }}>
          Red text that stands out clearly
        </Text>
      </View>

      {/* Custom background container - copy this View */}
      <View 
        style={{ 
          backgroundColor: '#e3f2fd',
          padding: 16, 
          borderRadius: 8, 
          marginBottom: 16,
          borderWidth: 1,
          borderColor: '#2196f3'
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#1976d2' }}>
          Light Blue Container
        </Text>
        <Text style={{ lineHeight: 22, color: '#1976d2' }}>
          Custom background colors with matching text colors ensure
          excellent contrast and readability.
        </Text>
      </View>

      {/* Status message container - copy this View */}
      <View 
        style={{ 
          backgroundColor: '#fff3cd',
          padding: 16, 
          borderRadius: 8,
          borderLeftWidth: 4,
          borderLeftColor: '#ffc107',
          marginBottom: 16
        }}
      >
        <Text 
          style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#856404' }}
        >
          Status Message
        </Text>
        <Text 
          style={{ lineHeight: 22, color: '#856404' }}
        >
          Status containers use warning colors with proper contrast
          for important notifications and alerts.
        </Text>
      </View>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 24, marginBottom: 16, ...styles.text }}>
        Different Background Styles
      </Text>

      {/* Light background example - copy this View */}
      <View 
        style={{ 
          ...styles.cardBackground,
          padding: 16, 
          borderRadius: 8, 
          marginBottom: 16,
          borderWidth: 1,
          borderColor: '#dee2e6'
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#212529' }}>
          Light Background Style
        </Text>
        <Text style={{ lineHeight: 22, color: '#212529' }}>
          Light gray background with dark text provides
          subtle emphasis and clear readability.
        </Text>
      </View>

      {/* Dark background example - copy this View */}
      <View 
        style={{ 
          backgroundColor: '#343a40',
          padding: 16, 
          borderRadius: 8, 
          marginBottom: 16
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#fff' }}>
          Dark Background Style
        </Text>
        <Text style={{ lineHeight: 22, color: '#fff' }}>
          Dark background with white text creates
          dramatic emphasis and excellent contrast.
        </Text>
      </View>

      {/* Custom branded container - copy this View */}
      <View 
        style={{ 
          backgroundColor: '#f3e5f5',
          padding: 16, 
          borderRadius: 8, 
          marginBottom: 16,
          borderWidth: 2,
          borderColor: '#9c27b0'
        }}
      >
        <Text 
          style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#6a1b9a' }}
        >
          Custom Branded Style
        </Text>
        <Text 
          style={{ lineHeight: 22, color: '#6a1b9a' }}
        >
          Custom colors with proper contrast provide
          brand consistency while maintaining accessibility.
        </Text>
      </View>
    </ScrollView>
  );
}
