/*
Checkbox Demo
=============

What this demo shows:
This demo displays checkboxes that users can tap to check or uncheck, useful for forms and settings.

What component you need:
You need the Checkbox component from: /components/Checkbox.tsx
You also need: StyledText component from: /components/StyledText.tsx

How to copy and use in your project:
1. Copy the Checkbox.tsx and StyledText.tsx files to your components folder
2. Copy the import lines below
3. Copy the useState and checkbox examples below and paste them in your screen

Code examples to copy:
*/

import Checkbox from '@/components/Checkbox';
import StyledText from '@/components/StyledText';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function CheckboxDemo() {
  // State management for checkboxes - copy these lines
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      {/* Checkbox with label - copy this block */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Checkbox checked={checked1} onChange={setChecked1} />
        <StyledText type="paragraph">Option 1: {checked1 ? 'Checked' : 'Unchecked'}</StyledText>
      </View>
      
      {/* Pre-checked checkbox - copy this block */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Checkbox checked={checked2} onChange={setChecked2} />
        <StyledText type="paragraph">Option 2: {checked2 ? 'Checked' : 'Unchecked'}</StyledText>
      </View>
      
      {/* Another checkbox option - copy this block */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Checkbox checked={checked3} onChange={setChecked3} />
        <StyledText type="paragraph">Option 3: {checked3 ? 'Checked' : 'Unchecked'}</StyledText>
      </View>
    </ScrollView>
  );
}
