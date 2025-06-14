/*
SectionHeader Component
----------------------
Displays a section title with an optional accessory (e.g., button or icon).

Usage:
import { SectionHeader } from './components/SectionHeader';

<SectionHeader title="Section Title" />
<SectionHeader title="With Button" accessory={<Button title="Edit" onPress={...} />} />
<SectionHeader title="Custom Style" titleStyle={{ color: 'blue' }} />

Props:
- title: string // Section title text
- titleType?: string // ThemedText type for title (default: 'title')
- titleStyle?: object // Style for the title
- accessory?: ReactNode // Optional accessory (e.g., button, icon)
- style?: object // Container style
- ...ThemedViewProps // Any other ThemedView props
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