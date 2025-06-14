/*
LoadingSpinner Demo
------------------
This demo shows how to use the LoadingSpinner component to display a loading indicator (spinner).

Usage Steps:
1. Import the LoadingSpinner component:
   import LoadingSpinner from '@/components/LoadingSpinner';

2. Use the component in your JSX:
   <LoadingSpinner />
   <LoadingSpinner size="small" color="#333" />

Props:
- size?: 'small' | 'large' (default: 'large') – Spinner size.
- color?: string (default: #007bff) – Spinner color.

To use LoadingSpinner in another component, import it and provide the optional size and color props as needed.
*/

import LoadingSpinner from '@/components/LoadingSpinner';
import { ScrollView, View } from 'react-native';

export default function LoadingSpinnerDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        <LoadingSpinner />
      </View>
    </ScrollView>
  );
}
