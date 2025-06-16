/*
StyledText Component
--------------------
A text component with predefined typography styles for consistent text hierarchy.

Copy this file to your project's components folder and import it where needed.
Perfect for maintaining consistent typography throughout your app with heading and body styles.
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

const StyledText: React.FC<StyledTextProps> = ({ 
  children, 
  type = 'paragraph', 
  color = '#333', 
  style 
}) => {
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

  return (
    <Text style={[getTextStyle(), { color }, style]}>
      {children}
    </Text>
  );
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
