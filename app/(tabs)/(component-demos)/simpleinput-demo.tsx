/*
SimpleInput Demo
----------------
This demo shows how to use the SimpleInput component for basic text input with an optional label.

Usage Steps:
1. Import the SimpleInput component:
   import SimpleInput from '@/components/SimpleInput';

2. Use a state variable to control the input value:
   const [value, setValue] = useState('');

3. Use the component in your JSX:
   <SimpleInput value={value} onChangeText={setValue} placeholder="Type here..." />

Props:
- label?: string – Optional label above the input.
- ...TextInputProps – Any other TextInput props (value, onChangeText, placeholder, etc.).

To use SimpleInput in another component, import it and provide the required value and onChangeText props, and any optional label or TextInput props.
*/

import SimpleInput from '@/components/SimpleInput';
import StyledText from '@/components/StyledText';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function SimpleInputDemo() {
  const [value, setValue] = useState('');
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        <SimpleInput value={value} onChangeText={setValue} placeholder="Type here..." />
        <StyledText type="paragraph">Value: {value}</StyledText>
      </View>
    </ScrollView>
  );
}
