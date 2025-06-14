/*
Divider Component
-----------------
A horizontal line separator for dividing content.

Usage:
import Divider from './components/Divider';

<Divider />
<Divider color="#000" thickness={2} marginVertical={16} />

Props:
- color?: string // Line color (default: #ccc)
- thickness?: number // Line thickness (default: 1)
- marginVertical?: number // Vertical margin (default: 8)
*/

import React from 'react';
import { View } from 'react-native';

interface DividerProps {
  color?: string;
  thickness?: number;
  marginVertical?: number;
}

const Divider: React.FC<DividerProps> = ({ color = '#ccc', thickness = 1, marginVertical = 8 }) => (
  <View style={{
    borderBottomColor: color,
    borderBottomWidth: thickness,
    marginVertical,
  }} />
);

export default Divider;