/*
InfoBlock Component
-------------------
A themed container component for displaying titled content blocks with consistent styling.

Copy this file to your project's components folder and import it where needed.
Perfect for organizing content into well-structured, themed sections throughout your app.
*/

import { ThemedText, ThemedTextProps } from '@/components/ThemedText';
import { ThemedView, ThemedViewProps } from '@/components/ThemedView';
import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

interface InfoBlockProps extends Omit<ThemedViewProps, 'style'> {
  title?: string;
  titleType?: ThemedTextProps['type'];
  titleStyle?: ThemedTextProps['style'];
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  titleType = 'subtitle',
  titleStyle,
  children,
  style,
  ...themedViewProps
}) => {
  return (
    <ThemedView style={[styles.container, style]} {...themedViewProps}>
      {title && <ThemedText type={titleType} style={titleStyle}>{title}</ThemedText>}
      {children}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 8,
  },
});