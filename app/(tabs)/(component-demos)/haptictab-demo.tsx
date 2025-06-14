/*
HapticTab Demo
--------------
This demo explains how to use the HapticTab component to provide haptic feedback for tab bar buttons on iOS.

Usage Steps:
1. Import the HapticTab component:
   import { HapticTab } from '@/components/HapticTab';

2. Use it as the tabBarButton in your Tab.Navigator options:
   <Tab.Screen
     name="Home"
     component={HomeScreen}
     options={{ tabBarButton: (props) => <HapticTab {...props} /> }}
   />

Props:
- All BottomTabBarButtonProps from @react-navigation/bottom-tabs are supported.

Note: HapticTab is not a visual component for direct rendering; it is meant to be used in navigation configuration to enhance UX on iOS.
*/

import { Text, View } from 'react-native';

export default function HapticTabDemo() {
  return (
    <View style={{ padding: 24 }}>
      <Text>HapticTab is used as a custom tabBarButton in navigation. Try it in your Tab.Navigator options.</Text>
      {/* Example usage in navigation options, not interactive here. */}
    </View>
  );
}
