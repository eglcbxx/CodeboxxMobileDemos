/*
CustomButton Demo
=================

What this demo shows:
This demo displays customizable buttons with different colors and states that users can tap to trigger actions.

What component you need:
You need the CustomButton component from: /components/CustomButton.tsx

How to copy and use in your project:
1. Copy the CustomButton.tsx file to your components folder
2. Copy the import line below: import CustomButton from '@/components/CustomButton';
3. Copy any of the CustomButton examples below and paste them in your screen

Code examples to copy:
*/

import CustomButton from '@/components/CustomButton';
import { Alert, ScrollView, View } from 'react-native';

export default function CustomButtonDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        {/* Default blue button - copy this block */}
        <CustomButton 
          title="Default Button" 
          onPress={() => Alert.alert('Button Pressed', 'Default button was tapped!')} 
        />
        
        {/* Green success button - copy this block */}
        <CustomButton 
          title="Success Button" 
          color="#28a745" 
          onPress={() => Alert.alert('Success!', 'Green button was tapped!')} 
        />
        
        {/* Yellow warning button - copy this block */}
        <CustomButton 
          title="Warning Button" 
          color="#ffc107" 
          onPress={() => Alert.alert('Warning!', 'Yellow button was tapped!')} 
        />
        
        {/* Red danger button - copy this block */}
        <CustomButton 
          title="Danger Button" 
          color="#dc3545" 
          onPress={() => Alert.alert('Danger!', 'Red button was tapped!')} 
        />
        
        {/* Disabled button - copy this block */}
        <CustomButton 
          title="Disabled Button" 
          disabled 
          onPress={() => Alert.alert('This should not appear')} 
        />
      </View>
    </ScrollView>
  );
}
