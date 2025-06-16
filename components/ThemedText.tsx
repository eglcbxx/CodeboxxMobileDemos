/*
ThemedText Component
-------------
A text component that automatically adapts to light/dark themes with predefined typography styles.

Copy this file to your project's components folder and ensure you have the useThemeColor hook.
Supports different text types (title, subtitle, link) and custom light/dark colors.
*/

import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  forceTheme?: 'light' | 'dark'; // Manual theme override
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  forceTheme,
  ...rest
}: ThemedTextProps) {
  // Use forceTheme if provided, otherwise use auto theme
  const color = useThemeColor({ 
    light: lightColor || '#000', // Default to black for light
    dark: darkColor || '#fff'    // Default to white for dark
  }, 'text', forceTheme);

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000"
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
