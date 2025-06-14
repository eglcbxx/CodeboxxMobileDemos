/*
CustomButton Demo
----------------
This demo shows how to use the CustomButton component for user actions.

Usage Steps:
1. Import the CustomButton component:
   import CustomButton from '@/components/CustomButton';

2. Use the component in your JSX:
   <CustomButton title="Default Button" onPress={() => {}} />
   <CustomButton title="Disabled Button" disabled onPress={() => {}} />

Props:
- title: string (required) – The button text.
- onPress: (event: GestureResponderEvent) => void (required) – Function to call on press.
- color?: string – Button background color (default: #007bff).
- disabled?: boolean – Disable the button (default: false).

To use CustomButton in another component, import it and provide the required title and onPress props, and any optional styling or disabled state.
*/

import CustomButton from '@/components/CustomButton';
import { ScrollView, View } from 'react-native';

export default function CustomButtonDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        <CustomButton title="Default Button" onPress={() => {}} />
        <CustomButton title="Disabled Button" disabled onPress={() => {}} />
      </View>
    </ScrollView>
  );
}
