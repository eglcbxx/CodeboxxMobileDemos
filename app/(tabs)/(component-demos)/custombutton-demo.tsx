/*
CustomButton Demo
----------------
Demonstrates the CustomButton component with different colors, states, and actions.

Copy-paste instructions:
1. Copy the CustomButton.tsx file to your components folder
2. Import: import CustomButton from './components/CustomButton';
3. Use with title and onPress props, plus optional color and disabled props
*/

import CustomButton from '@/components/CustomButton';
import { Alert, ScrollView, View } from 'react-native';

export default function CustomButtonDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        <CustomButton 
          title="Default Button" 
          onPress={() => Alert.alert('Button Pressed', 'Default button was tapped!')} 
        />
        <CustomButton 
          title="Success Button" 
          color="#28a745" 
          onPress={() => Alert.alert('Success!', 'Green button was tapped!')} 
        />
        <CustomButton 
          title="Warning Button" 
          color="#ffc107" 
          onPress={() => Alert.alert('Warning!', 'Yellow button was tapped!')} 
        />
        <CustomButton 
          title="Danger Button" 
          color="#dc3545" 
          onPress={() => Alert.alert('Danger!', 'Red button was tapped!')} 
        />
        <CustomButton 
          title="Disabled Button" 
          disabled 
          onPress={() => Alert.alert('This should not appear')} 
        />
      </View>
    </ScrollView>
  );
}
