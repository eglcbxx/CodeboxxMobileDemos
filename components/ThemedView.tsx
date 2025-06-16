/*
ThemedView Component
-------------
A view container that automatically adapts background color to light/dark themes.

Copy this file to your project's components folder and ensure you have the useThemeColor hook.
Perfect for creating themed layouts that respond to system appearance changes.
*/

import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  forceTheme?: 'light' | 'dark'; // Manual theme override
};

export function ThemedView({ style, lightColor, darkColor, forceTheme, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ 
    light: lightColor || '#fff', // Default to white for light
    dark: darkColor || '#151718' // Default to dark gray for dark
  }, 'background', forceTheme);

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
