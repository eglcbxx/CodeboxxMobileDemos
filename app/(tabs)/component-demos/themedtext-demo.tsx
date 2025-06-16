/*
Text Demo
=========

What this demo shows:
This demo displays various text styles using standard React Native Text component with consistent colors for optimal visibility.

What component you need:
You need the standard Text component from React Native (no custom components required).

How to copy and use in your project:
1. Copy the import line below: import { Text, ScrollView, View } from 'react-native';
2. Copy any of the Text examples below and paste them in your screen
3. All text uses standard colors for consistent visibility

Code examples to copy:
*/

import { ScrollView, Text, View } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';

export default function TextDemo() {
  const styles = useThemedStyles();
  return (
    <ScrollView style={{ flex: 1, padding: 16, ...styles.scrollViewBackground }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, ...styles.text }}>
        Text Component Demo
      </Text>

      <View style={{ marginBottom: 24 }}>
        {/* Title text style - copy this line */}
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
          Title Text Style
        </Text>
        
        {/* Subtitle text style - copy this line */}
        <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 8, ...styles.text }}>
          Subtitle Text Style
        </Text>
        
        {/* Semi-bold text - copy this line */}
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, ...styles.text }}>
          Semi-Bold Default Text
        </Text>
        
        {/* Default text style - copy this line */}
        <Text style={{ fontSize: 16, marginBottom: 8, ...styles.text }}>
          Default Text Style - This is the standard text appearance
        </Text>
        
        {/* Link text style - copy this line */}
        <Text style={{ fontSize: 16, marginBottom: 8, color: '#007bff' }}>
          Link Text Style (Blue Color)
        </Text>
      </View>

      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 12, ...styles.text }}>
          Custom Styled Examples:
        </Text>
        
        {/* Large custom text - copy this block */}
        <Text 
          style={{ 
            fontSize: 24, 
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 8,
            ...styles.text
          }}
        >
          Large Centered Title
        </Text>
        
        {/* Colored text example - copy this block */}
        <Text 
          style={{ 
            color: '#007bff',
            fontSize: 16,
            fontStyle: 'italic',
            marginBottom: 8
          }}
        >
          Custom Blue Italic Text
        </Text>
        
        {/* Multi-line text example - copy this block */}
        <Text style={{ lineHeight: 24, ...styles.text }}>
          This is a longer paragraph of text to demonstrate how Text handles multiple lines and longer content. 
          The text uses consistent black color for optimal visibility.
        </Text>
      </View>

      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 12, ...styles.text }}>
          Different Text Variations:
        </Text>
        
        {/* White text on dark background - copy this block */}
        <Text 
          style={{ 
            backgroundColor: '#2a2a2a',
            color: '#fff',
            padding: 12,
            borderRadius: 8,
            marginBottom: 8
          }}
        >
          White text on dark background for contrast
        </Text>
        
        {/* Dark text on light background - copy this block */}
        <Text 
          style={{ 
            backgroundColor: '#f0f0f0',
            ...styles.text,
            padding: 12,
            borderRadius: 8,
            marginBottom: 8
          }}
        >
          Dark text on light background for contrast
        </Text>
        
        {/* Custom colors with good contrast - copy this block */}
        <Text 
          style={{ 
            backgroundColor: '#ffebee',
            color: '#d32f2f',
            padding: 12,
            borderRadius: 8,
            marginBottom: 8
          }}
        >
          Custom red text with light pink background
        </Text>
      </View>
    </ScrollView>
  );
}
