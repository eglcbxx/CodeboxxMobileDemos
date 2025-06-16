/*
View Demo
=========

What this demo shows:
This demo shows how to create containers with various backgrounds using standard React Native View component with consistent styling.

What component you need:
You need the standard View and Text components from React Native (no custom components required).

How to copy and use in your project:
1. Copy the import lines below
2. Copy the View examples below and paste them in your screen
3. All containers use explicit colors for consistent visibility

Code examples to copy:
*/

import { useThemedStyles } from '@/hooks/useThemedStyles';
import { ScrollView, Text, View } from 'react-native';

export default function ViewDemo() {
  const styles = useThemedStyles();
  return (
    <ScrollView style={{ flex: 1, padding: 16, ...styles.scrollViewBackground }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, ...styles.text }}>
        View Component Demo
      </Text>

      {/* Basic container - copy this View */}
      <View style={{ ...styles.lightCardBackground, padding: 16, borderRadius: 8, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
          Default Container
        </Text>
        <Text style={{ lineHeight: 20, ...styles.text }}>
          This container uses white background with dark text for optimal readability.
          Consistent styling ensures visibility across all devices!
        </Text>
      </View>

      {/* Custom colored container - copy this View */}
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
        <Text style={{ lineHeight: 20, color: '#1976d2' }}>
          This container has a light blue background with matching dark blue text.
          Perfect for creating branded or accent areas with good contrast.
        </Text>
      </View>

      {/* Card-style container - copy this View */}
      <View 
        style={{ 
          ...styles.lightCardBackground,
          padding: 16, 
          borderRadius: 8, 
          borderWidth: 1,
          borderColor: '#e0e0e0',
          marginBottom: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
          Card-style Container
        </Text>
        <Text style={{ lineHeight: 20, marginBottom: 12, ...styles.text }}>
          Containers are perfect for creating cards, panels, and sections
          that maintain visual consistency with proper styling.
        </Text>
        
        {/* Nested container - copy this pattern */}
        <View 
          style={{ 
            backgroundColor: '#f5f5f5',
            padding: 12, 
            borderRadius: 6,
            marginTop: 8
          }}
        >
          <Text style={[{ fontStyle: 'italic' }, styles.caption]}>
            Nested containers maintain proper contrast ratios
          </Text>
        </View>
      </View>

      {/* Status/Alert container - copy this View */}
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
          Status Container
        </Text>
        <Text 
          style={{ lineHeight: 20, color: '#856404' }}
        >
          Use containers for status messages, alerts, and notifications
          that need to remain visible and accessible with clear contrast.
        </Text>
      </View>

      {/* Success container - copy this View */}
      <View 
        style={{ 
          backgroundColor: '#e8f5e8',
          padding: 16, 
          borderRadius: 8,
          borderLeftWidth: 4,
          borderLeftColor: '#4caf50',
          marginBottom: 16
        }}
      >
        <Text 
          style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#2e7d32' }}
        >
          Success Container
        </Text>
        <Text 
          style={{ lineHeight: 20, color: '#2e7d32' }}
        >
          Green containers work great for success messages and positive feedback
          with excellent contrast ratios.
        </Text>
      </View>

      {/* Info tip container - copy this View */}
      <View 
        style={{ 
          backgroundColor: '#e3f2fd',
          padding: 16, 
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 16
        }}
      >
        <Text 
          style={{ fontSize: 14, textAlign: 'center', fontWeight: 'bold', color: '#1976d2' }}
        >
          💡 Pro Tip
        </Text>
        <Text 
          style={{ fontSize: 14, textAlign: 'center', marginTop: 4, color: '#1976d2' }}
        >
          Standard View components provide consistent styling and
          reliable visibility across all devices and themes.
        </Text>
      </View>

      {/* Different Background Variations Section */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 24, marginBottom: 16, ...styles.text }}>
        Different Background Variations
      </Text>

      {/* Light background container - copy this View */}
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
          Light Background Container
        </Text>
        <Text style={{ lineHeight: 20, color: '#212529' }}>
          This container uses light gray background with dark text.
          Great for subtle emphasis and content separation.
        </Text>
      </View>

      {/* Dark background container - copy this View */}
      <View 
        style={{ 
          backgroundColor: '#343a40',
          padding: 16, 
          borderRadius: 8, 
          marginBottom: 16
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#fff' }}>
          Dark Background Container
        </Text>
        <Text style={{ lineHeight: 20, color: '#fff' }}>
          This container uses dark background with white text for dramatic emphasis
          or specific design requirements.
        </Text>
      </View>

      {/* Custom purple container - copy this View */}
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
          Custom Purple Container
        </Text>
        <Text 
          style={{ lineHeight: 20, color: '#6a1b9a' }}
        >
          You can use custom colors with proper contrast for
          complete control over your component appearance.
        </Text>
      </View>
    </ScrollView>
  );
}
