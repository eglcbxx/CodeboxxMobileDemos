/*
StyledText Component
-------------------
Displays styled text as a heading, paragraph, or caption.

Usage:
import StyledText from './components/StyledText';

<StyledText type="heading1">Heading Example</StyledText>
<StyledText type="paragraph">This is a paragraph.</StyledText>
<StyledText type="caption" color="#888">Small caption text.</StyledText>

Props:
- children: ReactNode // Text content
- type?: 'heading1' | 'paragraph' | 'caption' // Text style (default: 'paragraph')
- color?: string // Text color (default: #333)
- style?: object // Additional style
*/

import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

type StyledTextType = 'heading1' | 'heading2' | 'paragraph' | 'caption';

interface StyledTextProps {
  children: ReactNode;
  type?: StyledTextType;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const StyledText: React.FC<StyledTextProps> = ({ children, type, color, style }) => {
  const getTextStyle = () => {
    switch (type) {
      case 'heading1':
        return styles.heading1;
      case 'heading2':
        return styles.heading2;
      case 'paragraph':
        return styles.paragraph;
      case 'caption':
        return styles.caption;
      default:
        return styles.paragraph;
    }
  };

  return <Text style={[getTextStyle(), { color: color || '#333' }, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    color: '#666',
  },
});

export default StyledText;
