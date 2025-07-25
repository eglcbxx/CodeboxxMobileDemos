/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

/*
Themed Component Utilities
---------------------------
Provides themed Text and View components that automatically adapt to light and dark modes.

Copy this file to your project's components folder and import it where needed.
Perfect for maintaining consistent theming across your app with automatic dark/light mode support.
*/

import { Text as DefaultText, View as DefaultView } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  forceTheme?: 'light' | 'dark'; // Manual theme override
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  forceTheme?: 'light' | 'dark'
) {
  const systemTheme = useColorScheme() ?? 'light';
  const theme = forceTheme || systemTheme; // Use forced theme or fall back to system
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, forceTheme, ...otherProps } = props;
  const color = useThemeColor({ 
    light: lightColor || '#000', // Default to black for light
    dark: darkColor || '#fff'    // Default to white for dark
  }, 'text', forceTheme);

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, forceTheme, ...otherProps } = props;
  const backgroundColor = useThemeColor({ 
    light: lightColor || '#fff', // Default to white for light
    dark: darkColor || '#151718' // Default to dark gray for dark
  }, 'background', forceTheme);

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
