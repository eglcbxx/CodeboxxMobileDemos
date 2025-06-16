/*
Themed Demo
-----------
Copy the Themed components to create Text and View elements that automatically adapt to light/dark modes.
Toggle your device's appearance settings to see the theme adaptation in action.
*/

import { ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { ThemedText } from '../../../components/ThemedText';

export default function ThemedDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        Themed Components Demo
      </ThemedText>

      <View style={{ padding: 16, borderRadius: 8, marginBottom: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Auto-Themed Text
        </Text>
        <Text style={{ lineHeight: 22 }}>
          This text automatically adapts to your device's light or dark mode setting.
          No manual theme switching required!
        </Text>
      </View>

      <View style={{ padding: 16, borderRadius: 8, marginBottom: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Custom Theme Colors
        </Text>
        <Text lightColor="#007aff" darkColor="#64b5f6" style={{ marginBottom: 8 }}>
          Blue text that adjusts intensity for light/dark modes
        </Text>
        <Text lightColor="#34c759" darkColor="#81c784" style={{ marginBottom: 8 }}>
          Green text with theme-appropriate brightness
        </Text>
        <Text lightColor="#ff3b30" darkColor="#ef5350">
          Red text that remains visible in both themes
        </Text>
      </View>

      <View 
        lightColor="#f0f8ff" 
        darkColor="#1a1a2e"
        style={{ padding: 16, borderRadius: 8, marginBottom: 16 }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Themed Container
        </Text>
        <Text style={{ lineHeight: 22 }}>
          This container has custom background colors for light and dark modes.
          The background automatically switches based on your system preference.
        </Text>
      </View>

      <View 
        lightColor="#fff3cd" 
        darkColor="#2d2d2d"
        style={{ 
          padding: 16, 
          borderRadius: 8, 
          borderLeftWidth: 4,
          borderLeftColor: '#ffc107'
        }}
      >
        <Text 
          lightColor="#856404" 
          darkColor="#fff3cd"
          style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 4 }}
        >
          Pro Tip:
        </Text>
        <Text 
          lightColor="#856404" 
          darkColor="#e6d3a3"
          style={{ lineHeight: 20 }}
        >
          Use themed components throughout your app for consistent, accessible
          design that respects user preferences automatically.
        </Text>
      </View>
    </ScrollView>
  );
}
