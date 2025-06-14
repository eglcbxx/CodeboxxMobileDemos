/*
Spacer Component
----------------
Adds vertical or horizontal space between elements.

Usage:
import Spacer from './components/Spacer';

<Spacer height={16} />
<Spacer width={24} />

Props:
- height?: number // Height in pixels (default: 8)
- width?: number // Width in pixels (default: 0)
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