/*
Switch Component
----------------
A toggle switch for on/off settings.

Usage:
import Switch from './components/Switch';

<Switch value={true} onValueChange={setValue} />

Props:
- value: boolean // Current value
- onValueChange: (value: boolean) => void // Callback when toggled
*/

import React from 'react';
import { Switch as RNSwitch } from 'react-native';

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ value, onValueChange }) => (
  <RNSwitch value={value} onValueChange={onValueChange} />
);

export default Switch;