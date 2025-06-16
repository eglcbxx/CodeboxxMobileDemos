/*
Spacer Component
----------------
A simple spacing component for adding consistent gaps between UI elements.

Copy this file to your project's components folder and import it where needed.
Perfect for creating consistent spacing in layouts without custom margin/padding styles.
*/

import React from 'react';
import { View } from 'react-native';

interface SpacerProps {
  height?: number;
  width?: number;
}

const Spacer: React.FC<SpacerProps> = ({ height = 8, width = 0 }) => (
  <View style={{ height, width }} />
);

export default Spacer;