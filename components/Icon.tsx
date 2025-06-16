/*
Icon Component
--------------
A simple icon component that displays text-based icon placeholders.

Copy this file to your project's components folder and import it where needed.
This is a basic implementation - for production apps, consider using actual icon libraries like react-native-vector-icons.
*/

import React from 'react';
import { Text } from 'react-native';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#000' }) => {
  return (
    <Text style={{ fontSize: size, color }}>
      📍 {name}
    </Text>
  );
};

export default Icon;