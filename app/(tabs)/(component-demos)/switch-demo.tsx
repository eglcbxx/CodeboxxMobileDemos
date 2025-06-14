/*
Switch Demo
-----------
This demo shows how to use the Switch component to toggle between on/off states.

Usage Steps:
1. Import the Switch component:
   import Switch from '@/components/Switch';

2. Use a state variable to control the value:
   const [on, setOn] = useState(false);

3. Use the component in your JSX:
   <Switch value={on} onValueChange={setOn} />

Props:
- value: boolean (required) – Current value of the switch.
- onValueChange: (value: boolean) => void (required) – Callback when toggled.

To use Switch in another component, import it and provide the value and onValueChange handler.
*/

import StyledText from '@/components/StyledText';
import Switch from '@/components/Switch';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function SwitchDemo() {
  const [on, setOn] = useState(false);
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginVertical: 16 }}>
        <Switch value={on} onValueChange={setOn} />
        <StyledText type="paragraph">{on ? 'On' : 'Off'}</StyledText>
      </View>
    </ScrollView>
  );
}
