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
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
