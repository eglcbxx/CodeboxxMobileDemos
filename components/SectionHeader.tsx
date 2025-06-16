/*
SectionHeader Component
-----------------------
A header component for sections with optional accessory elements like buttons or icons.

Copy this file to your project's components folder and import it where needed.
Perfect for organizing content into sections with clear headers and optional actions.
*/

import { ThemedText, ThemedTextProps } from '@/components/ThemedText';
import { ThemedView, ThemedViewProps } from '@/components/ThemedView';
import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface SectionHeaderProps extends Omit<ThemedViewProps, 'style'> {
  title: string;
  titleType?: ThemedTextProps['type'];
  titleStyle?: StyleProp<TextStyle>;
  accessory?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleType = 'title',
  titleStyle,
  accessory,
  style,
  ...themedViewProps
}) => {
  return (
    <ThemedView style={[styles.container, style]} {...themedViewProps}>
      <ThemedText type={titleType} style={titleStyle}>{title}</ThemedText>
      {accessory}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});