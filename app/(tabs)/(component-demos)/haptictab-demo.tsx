/*
HapticTab Demo
--------------
Copy the HapticTab component to add haptic feedback to tab navigation on iOS.
This enhances user experience by providing tactile feedback when switching tabs.
*/

import { ScrollView, View } from 'react-native';
import { HapticTab } from '../../../components/HapticTab';
import { ThemedText } from '../../../components/ThemedText';

export default function HapticTabDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        HapticTab Component
      </ThemedText>
      
      <ThemedText style={{ marginBottom: 16, lineHeight: 20 }}>
        HapticTab is designed to be used as a custom tabBarButton in React Navigation's 
        Tab.Navigator to provide haptic feedback on iOS devices.
      </ThemedText>

      <View style={{ 
        backgroundColor: '#f5f5f5', 
        padding: 16, 
        borderRadius: 8,
        marginBottom: 24 
      }}>
        <ThemedText style={{ fontWeight: 'bold', marginBottom: 8 }}>
          Integration Example:
        </ThemedText>
        <ThemedText style={{ fontFamily: 'monospace', fontSize: 12 }}>
          {`<Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarButton: (props) => 
                  <HapticTab {...props} />
              }}
            />`}
        </ThemedText>
      </View>

      <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
        Simulated Tab Buttons
      </ThemedText>
      
      <ThemedText style={{ marginBottom: 16, color: '#666' }}>
        These buttons demonstrate what tab interactions would feel like with haptic feedback:
      </ThemedText>

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
          <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>
            Home
          </ThemedText>
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
          <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>
            Search
          </ThemedText>
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
          <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>
            Profile
          </ThemedText>
        </HapticTab>
      </View>

      <ThemedText style={{ marginTop: 16, fontSize: 12, color: '#666', fontStyle: 'italic' }}>
        Note: Haptic feedback is only available on iOS devices. On Android, these function as regular touchable components.
      </ThemedText>
    </ScrollView>
  );
}
