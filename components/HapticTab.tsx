/*
HapticTab Component
-------------------
A custom tab bar button that provides haptic feedback on iOS when pressed.

Usage:
1. Import the component:
   import { HapticTab } from './components/HapticTab';

2. Use as the tabBarButton in your navigator:
   <Tab.Screen
     name="Home"
     component={HomeScreen}
     options={{ tabBarButton: (props) => <HapticTab {...props} /> }}
   />

Props:
- All BottomTabBarButtonProps from @react-navigation/bottom-tabs
*/

import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';

export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === 'ios') {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}
