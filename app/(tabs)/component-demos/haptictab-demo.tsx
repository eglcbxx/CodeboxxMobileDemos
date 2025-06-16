/*
HapticTab Demo
==============

What this demo shows:
This demo shows the HapticTab component that adds haptic feedback (vibration) to tab navigation on iOS devices for better user experience.

What component you need:
You need the HapticTab component from: /components/HapticTab.tsx

How to copy and use in your project:
1. Copy the HapticTab.tsx file to your components folder
2. Copy the tab navigator setup code below
3. Replace your tab navigation button with the HapticTab component

Code examples to copy:
*/

import { HapticTab } from '@/components/HapticTab';
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { ScrollView, Text, View } from 'react-native';

export default function HapticTabDemo() {
  const styles = useThemedStyles();
  return (
    <ScrollView style={{ flex: 1, padding: 16, ...styles.scrollViewBackground }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, ...styles.text }}>
        HapticTab Component Demo
      </Text>
      
      <Text style={{ marginBottom: 16, lineHeight: 20, ...styles.text }}>
        HapticTab is designed to be used as a custom tabBarButton in React Navigation&apos;s
        Tab.Navigator to provide haptic feedback on iOS devices.
      </Text>

      <View style={{ ...styles.lightCardBackground, padding: 16, borderRadius: 8, marginBottom: 16 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
          How to use in your Tab.Navigator:
        </Text>
      </View>

      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
        Simulated Tab Buttons
      </Text>
      
      <Text style={{ marginBottom: 16, ...styles.text }}>
        These buttons demonstrate what tab interactions would feel like with haptic feedback:
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <HapticTab
          onPress={() => {}}
          style={{
            backgroundColor: '#007AFF',
            padding: 12,
            borderRadius: 8,
            alignItems: 'center',
            minWidth: 80
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Home
          </Text>
        </HapticTab>

        <HapticTab
          onPress={() => {}}
          style={{
            backgroundColor: '#34C759',
            padding: 12,
            borderRadius: 8,
            alignItems: 'center',
            minWidth: 80
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Search
          </Text>
        </HapticTab>

        <HapticTab
          onPress={() => {}}
          style={{
            backgroundColor: '#FF9500',
            padding: 12,
            borderRadius: 8,
            alignItems: 'center',
            minWidth: 80
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Profile
          </Text>
        </HapticTab>
      </View>

      <Text style={[{ marginTop: 16, fontStyle: 'italic' }, styles.caption]}>
        Note: Haptic feedback is only available on iOS devices. On Android, these function as regular touchable components.
      </Text>
    </ScrollView>
  );
}
