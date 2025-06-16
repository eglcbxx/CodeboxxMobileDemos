/*
Switch Component
----------------
A toggle switch component for on/off settings and boolean inputs.

Copy this file to your project's components folder and import it where needed.
Perfect for settings screens, preferences, and any boolean toggle functionality.
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