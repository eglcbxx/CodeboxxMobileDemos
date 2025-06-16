/*
Divider Component
-----------------
A simple horizontal line component for visually separating content sections.

Copy this file to your project's components folder and import it where needed.
Perfect for separating content sections, list items, and layout elements.
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