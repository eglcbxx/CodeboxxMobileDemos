/*
LoadingSpinner Demo
===================

What this demo shows:
This demo displays animated spinning indicators that show users when content is loading or processing.

What component you need:
You need the LoadingSpinner component from: /components/LoadingSpinner.tsx
You also need: StyledText component from: /components/StyledText.tsx

How to copy and use in your project:
1. Copy the LoadingSpinner.tsx and StyledText.tsx files to your components folder
2. Copy the import lines below
3. Copy any of the LoadingSpinner examples below and paste them in your screen

Code examples to copy:
*/

import LoadingSpinner from '@/components/LoadingSpinner';
import StyledText from '@/components/StyledText';
import { ScrollView, View } from 'react-native';

export default function LoadingSpinnerDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 24, marginVertical: 16 }}>
        {/* Default large spinner - copy this block */}
        <View style={{ alignItems: 'center', padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 }}>
          <StyledText type="heading2">Default Large Spinner</StyledText>
          <LoadingSpinner />
        </View>
        
        {/* Small spinner - copy this block */}
        <View style={{ alignItems: 'center', padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 }}>
          <StyledText type="heading2">Small Spinner</StyledText>
          <LoadingSpinner size="small" />
        </View>
        
        {/* Custom color spinners - copy this block */}
        <View style={{ alignItems: 'center', padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 }}>
          <StyledText type="heading2">Custom Color Spinners</StyledText>
          <View style={{ flexDirection: 'row', gap: 16, marginTop: 8 }}>
            <LoadingSpinner size="small" color="#28a745" />
            <LoadingSpinner size="small" color="#dc3545" />
            <LoadingSpinner size="small" color="#ffc107" />
            <LoadingSpinner size="small" color="#6f42c1" />
          </View>
        </View>
        
        {/* Dark background spinner - copy this block */}
        <View style={{ alignItems: 'center', padding: 16, backgroundColor: '#333', borderRadius: 8 }}>
          <StyledText type="heading2" color="#fff">Spinner on Dark Background</StyledText>
          <LoadingSpinner color="#fff" />
        </View>
      </View>
    </ScrollView>
  );
}