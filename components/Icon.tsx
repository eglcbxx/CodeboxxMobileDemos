/*
Icon Component
--------------
Displays a simple icon placeholder with a name.

Usage:
import Icon from './components/Icon';

<Icon name="star" />
<Icon name="user" size={32} color="#007bff" />

Props:
- name: string // Icon name (required)
- size?: number // Icon size (default: 24)
- color?: string // Icon color (default: #000)
*/

import React from 'react';
import { Text } from 'react-native';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  return <Text style={{ fontSize: size || 24, color: color || '#000' }}>Icon: {name}</Text>;
};

export default Icon;