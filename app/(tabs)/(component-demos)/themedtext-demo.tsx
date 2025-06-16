/*
ThemedText Demo
---------------
Copy the ThemedText component to create text that automatically adapts to light/dark themes.
Perfect for maintaining consistent typography that respects system appearance preferences.
*/

import { ScrollView, View } from 'react-native';
import { ThemedText } from '../../../components/ThemedText';

export default function ThemedTextDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        ThemedText Component Demo
      </ThemedText>

      <View style={{ marginBottom: 24 }}>
        <ThemedText type="title" style={{ marginBottom: 8 }}>
          Title Text Style
        </ThemedText>
        <ThemedText type="subtitle" style={{ marginBottom: 8 }}>
          Subtitle Text Style
        </ThemedText>
        <ThemedText type="defaultSemiBold" style={{ marginBottom: 8 }}>
          Semi-Bold Default Text
        </ThemedText>
        <ThemedText type="default" style={{ marginBottom: 8 }}>
          Default Text Style - This is the standard text appearance
        </ThemedText>
        <ThemedText type="link" style={{ marginBottom: 8 }}>
          Link Text Style - Appears as an interactive link
        </ThemedText>
      </View>

      <View style={{ marginBottom: 24 }}>
        <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Custom Themed Colors:
        </ThemedText>
        <ThemedText 
          lightColor="#007AFF" 
          darkColor="#64B5F6"
          style={{ marginBottom: 8 }}
        >
          Blue text optimized for light and dark modes
        </ThemedText>
        <ThemedText 
          lightColor="#34C759" 
          darkColor="#81C784"
          style={{ marginBottom: 8 }}
        >
          Green text with theme-appropriate brightness
        </ThemedText>
        <ThemedText 
          lightColor="#FF3B30" 
          darkColor="#EF5350"
          style={{ marginBottom: 8 }}
        >
          Red text that remains readable in both themes
        </ThemedText>
      </View>

      <View style={{ 
        backgroundColor: '#f5f5f5', 
        padding: 16, 
        borderRadius: 8,
        marginBottom: 24 
      }}>
        <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Typography Hierarchy
        </ThemedText>
        <ThemedText type="title" style={{ marginBottom: 4 }}>
          Main Heading
        </ThemedText>
        <ThemedText type="subtitle" style={{ marginBottom: 8 }}>
          Section Subtitle
        </ThemedText>
        <ThemedText type="default" style={{ lineHeight: 20 }}>
          Body text with proper line height for readability. ThemedText automatically
          adapts colors based on your system's light or dark mode preference.
        </ThemedText>
      </View>

      <View style={{ 
        backgroundColor: '#e8f4fd', 
        padding: 16, 
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#007AFF'
      }}>
        <ThemedText style={{ fontSize: 14, fontStyle: 'italic', textAlign: 'center' }}>
          ThemedText provides consistent typography that automatically respects
          user preferences for system appearance settings.
        </ThemedText>
      </View>
    </ScrollView>
  );
}
