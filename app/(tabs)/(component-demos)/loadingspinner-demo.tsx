/*
LoadingSpinner Demo
-------------------
Demonstrates the LoadingSpinner component for showing loading states during async operations.

Copy-paste instructions:
1. Copy the LoadingSpinner.tsx file to your components folder
2. Import: import LoadingSpinner from './components/LoadingSpinner';
3. Use with optional size and color props to indicate loading states
*/

import LoadingSpinner from '@/components/LoadingSpinner';
import StyledText from '@/components/StyledText';
import { ScrollView, View } from 'react-native';

export default function LoadingSpinnerDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 24, marginVertical: 16 }}>
        <View style={{ alignItems: 'center', padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 }}>
          <StyledText type="heading2">Default Large Spinner</StyledText>
          <LoadingSpinner />
        </View>
        
        <View style={{ alignItems: 'center', padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 }}>
          <StyledText type="heading2">Small Spinner</StyledText>
          <LoadingSpinner size="small" />
        </View>
        
        <View style={{ alignItems: 'center', padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 }}>
          <StyledText type="heading2">Custom Color Spinners</StyledText>
          <View style={{ flexDirection: 'row', gap: 16, marginTop: 8 }}>
            <LoadingSpinner size="small" color="#28a745" />
            <LoadingSpinner size="small" color="#dc3545" />
            <LoadingSpinner size="small" color="#ffc107" />
            <LoadingSpinner size="small" color="#6f42c1" />
          </View>
        </View>
        
        <View style={{ alignItems: 'center', padding: 16, backgroundColor: '#333', borderRadius: 8 }}>
          <StyledText type="heading2" color="#fff">Spinner on Dark Background</StyledText>
          <LoadingSpinner color="#fff" />
        </View>
      </View>
    </ScrollView>
  );
}
