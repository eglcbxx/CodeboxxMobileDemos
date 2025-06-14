/*
InfoBlock Component
------------------
Displays a block with an optional title and content, using themed styles.

Usage:
import { InfoBlock } from './components/InfoBlock';

<InfoBlock title="Section Title">
  <Text>Some content goes here.</Text>
</InfoBlock>

<InfoBlock
  title="Custom Title"
  titleType="title"
  titleStyle={{ color: 'blue' }}
  style={{ margin: 16 }}
>
  <Text>More details here.</Text>
</InfoBlock>

Props:
- title?: string // Optional block title
- titleType?: string // ThemedText type for title (default: 'subtitle')
- titleStyle?: object // Style for the title
- children: ReactNode // Content inside the block
- style?: object // Container style
- ...ThemedViewProps // Any other ThemedView props
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