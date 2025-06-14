/*
RadioButton Demo
---------------
This demo shows how to use the RadioButton component to select one option from a group.

Usage Steps:
1. Import the RadioButton component:
   import RadioButton from '@/components/RadioButton';

2. Use a state variable to track the selected value:
   const [selected, setSelected] = useState('option1');

3. Use the component in your JSX for each option:
   <RadioButton
     value="option1"
     label="Option 1"
     selected={selected === 'option1'}
     onPress={() => setSelected('option1')}
   />

Props:
- value: string (required) – The value of the radio button.
- label: string (required) – The label to display next to the button.
- selected: boolean (required) – Whether this button is selected.
- onPress: () => void (required) – Callback when pressed.

To use RadioButton in another component, import it and render one for each option, managing the selected state and onPress handler.
*/

import RadioButton from '@/components/RadioButton';
import StyledText from '@/components/StyledText';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function RadioButtonDemo() {
  const [selected, setSelected] = useState('option1');

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        <RadioButton
          value="option1"
          label="Option 1"
          selected={selected === 'option1'}
          onPress={() => setSelected('option1')}
        />
        <RadioButton
          value="option2"
          label="Option 2"
          selected={selected === 'option2'}
          onPress={() => setSelected('option2')}
        />
        <RadioButton
          value="option3"
          label="Option 3"
          selected={selected === 'option3'}
          onPress={() => setSelected('option3')}
        />
        <StyledText>Selected: {selected}</StyledText>
      </View>
    </ScrollView>
  );
}