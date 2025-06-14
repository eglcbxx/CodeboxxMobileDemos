/*
Checkbox Demo
-------------
This demo shows how to use the Checkbox component for toggling boolean values in forms.

Usage Steps:
1. Import the Checkbox component:
   import Checkbox from '@/components/Checkbox';

2. Use a state variable to control the checked state:
   const [checked, setChecked] = useState(false);

3. Use the component in your JSX:
   <Checkbox checked={checked} onChange={setChecked} />

Props:
- checked: boolean (required) – Whether the checkbox is checked.
- onChange: (checked: boolean) => void (required) – Callback when the checkbox is toggled.

To use Checkbox in another component, import it and provide the checked state and onChange handler.
*/

import Checkbox from '@/components/Checkbox';
import StyledText from '@/components/StyledText';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginVertical: 16 }}>
        <Checkbox checked={checked} onChange={setChecked} />
        <StyledText type="paragraph">{checked ? 'Checked' : 'Unchecked'}</StyledText>
      </View>
    </ScrollView>
  );
}
