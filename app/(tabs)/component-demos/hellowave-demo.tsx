/*
HelloWave Demo
==============

What this demo shows:
This demo displays an animated waving hand emoji that automatically plays a friendly greeting animation.

What component you need:
You need the HelloWave component from: /components/HelloWave.tsx

How to copy and use in your project:
1. Copy the HelloWave.tsx file to your components folder
2. Copy the import line below: import { HelloWave } from '@/components/HelloWave';
3. Copy any of the HelloWave examples below and paste them in your screen

Code examples to copy:
*/

import { HelloWave } from '@/components/HelloWave';
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { ScrollView, Text, View } from 'react-native';

export default function HelloWaveDemo() {
  const styles = useThemedStyles();
  return (
    <ScrollView style={{ flex: 1, padding: 16, ...styles.scrollViewBackground }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, ...styles.text }}>
        HelloWave Component Demo
      </Text>
      
      {/* Simple centered wave - copy this block */}
      <View style={{ alignItems: 'center', marginBottom: 24 }}>
        <HelloWave />
      </View>
      
      <Text style={{ textAlign: 'center', marginBottom: 24, fontSize: 16, ...styles.text }}>
        A simple animated wave greeting!
      </Text>

      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
          Usage Examples:
        </Text>
        
        {/* Welcome message with wave - copy this block */}
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginBottom: 12,
          padding: 12,
          backgroundColor: '#f5f5f5',
          borderRadius: 8
        }}>
          <Text style={{ fontSize: 16, marginRight: 8, ...styles.text }}>
            Welcome to our app!
          </Text>
          <HelloWave />
        </View>

        {/* Greeting with wave in middle - copy this block */}
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginBottom: 12,
          padding: 12,
          backgroundColor: '#f5f5f5',
          borderRadius: 8
        }}>
          <Text style={{ fontSize: 16, marginRight: 8, ...styles.text }}>
            Hello there
          </Text>
          <HelloWave />
          <Text style={{ fontSize: 16, marginLeft: 8, ...styles.text }}>
            Nice to meet you!
          </Text>
        </View>

        {/* Getting started card with wave - copy this block */}
        <View style={{ 
          alignItems: 'center',
          padding: 16,
          backgroundColor: '#e8f5e8',
          borderRadius: 8
        }}>
          <Text style={{ fontSize: 18, marginBottom: 8, ...styles.text }}>
            Getting Started
          </Text>
          <HelloWave />
          <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 8, ...styles.text }}>
            Perfect for welcome screens and greetings
          </Text>
        </View>
      </View>

      <Text style={[{ textAlign: 'center' }, styles.caption]}>
        The wave animation runs automatically when the component mounts.
        No props needed - just import and use!
      </Text>
    </ScrollView>
  );
}
