/*
Checkbox Demo
-------------
Demonstrates the Checkbox component with state management for form inputs and selections.

Copy-paste instructions:
1. Copy the Checkbox.tsx file to your components folder
2. Import: import Checkbox from './components/Checkbox';
3. Use with React state: const [checked, setChecked] = useState(false);
4. Pass checked and onChange props to control the checkbox state
*/

import Checkbox from '@/components/Checkbox';
import StyledText from '@/components/StyledText';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function CheckboxDemo() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Checkbox checked={checked1} onChange={setChecked1} />
        <StyledText type="paragraph">Option 1: {checked1 ? 'Checked' : 'Unchecked'}</StyledText>
      </View>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Checkbox checked={checked2} onChange={setChecked2} />
        <StyledText type="paragraph">Option 2: {checked2 ? 'Checked' : 'Unchecked'}</StyledText>
      </View>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Checkbox checked={checked3} onChange={setChecked3} />
        <StyledText type="paragraph">Option 3: {checked3 ? 'Checked' : 'Unchecked'}</StyledText>
      </View>
    </ScrollView>
  );
}
