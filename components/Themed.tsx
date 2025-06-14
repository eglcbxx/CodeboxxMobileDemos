/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

/*
Themed Component Utilities
-------------------------
Provides themed Text and View components that automatically adapt to light and dark modes using Expo's color scheme system.

Usage:
1. Import the themed components:
   import { Text, View, useThemeColor } from './components/Themed';

2. Use <Text> and <View> in place of React Native's default components to get automatic theming:
   <View>
     <Text>My themed text</Text>
   </View>

3. To customize colors, pass lightColor and darkColor props:
   <Text lightColor="#000" darkColor="#fff">Custom themed text</Text>

4. You can also use useThemeColor() to get a themed color value for custom styles.

Props:
- lightColor?: string // Color for light mode
- darkColor?: string // Color for dark mode
- All other standard Text/View props are supported.
*/

import { Text as DefaultText, View as DefaultView } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
