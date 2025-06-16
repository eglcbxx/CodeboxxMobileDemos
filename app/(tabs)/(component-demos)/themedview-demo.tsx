/*
ThemedView Demo
---------------
Copy the ThemedView component to create containers with backgrounds that automatically adapt to light/dark themes.
Perfect for creating consistent layouts that respect system appearance preferences.
*/

import { ScrollView } from 'react-native';
import { ThemedText } from '../../../components/ThemedText';
import { ThemedView } from '../../../components/ThemedView';

export default function ThemedViewDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        ThemedView Component Demo
      </ThemedText>

      <ThemedView style={{ padding: 16, borderRadius: 8, marginBottom: 16 }}>
        <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Default Themed Container
        </ThemedText>
        <ThemedText style={{ lineHeight: 20 }}>
          This container automatically uses appropriate background colors for light and dark modes.
          No manual theme switching required!
        </ThemedText>
      </ThemedView>

      <ThemedView 
        lightColor="#f0f8ff" 
        darkColor="#1e1e2e"
        style={{ padding: 16, borderRadius: 8, marginBottom: 16 }}
      >
        <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Custom Light/Dark Colors
        </ThemedText>
        <ThemedText style={{ lineHeight: 20 }}>
          This container has custom background colors: light blue for light mode
          and dark blue for dark mode. Perfect for creating branded or accent areas.
        </ThemedText>
      </ThemedView>

      <ThemedView 
        lightColor="#f8f9fa" 
        darkColor="#2d2d2d"
        style={{ 
          padding: 16, 
          borderRadius: 8, 
          borderWidth: 1,
          borderColor: '#e0e0e0',
          marginBottom: 16 
        }}
      >
        <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Card-like Container
        </ThemedText>
        <ThemedText style={{ lineHeight: 20, marginBottom: 12 }}>
          Themed containers are perfect for creating cards, panels, and sections
          that maintain visual consistency across different system themes.
        </ThemedText>
        
        <ThemedView 
          lightColor="#ffffff" 
          darkColor="#1a1a1a"
          style={{ 
            padding: 12, 
            borderRadius: 6,
            marginTop: 8
          }}
        >
          <ThemedText style={{ fontSize: 14, fontStyle: 'italic' }}>
            Nested themed containers maintain proper contrast ratios
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView 
        lightColor="#fff3cd" 
        darkColor="#3d3d1a"
        style={{ 
          padding: 16, 
          borderRadius: 8,
          borderLeftWidth: 4,
          borderLeftColor: '#ffc107',
          marginBottom: 16
        }}
      >
        <ThemedText 
          lightColor="#856404" 
          darkColor="#ffeb9c"
          style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}
        >
          Status Container
        </ThemedText>
        <ThemedText 
          lightColor="#856404" 
          darkColor="#e6d3a3"
          style={{ lineHeight: 20 }}
        >
          Use themed containers for status messages, alerts, and notifications
          that need to remain visible and accessible in both light and dark modes.
        </ThemedText>
      </ThemedView>

      <ThemedView 
        lightColor="#e8f5e8" 
        darkColor="#1a2d1a"
        style={{ 
          padding: 16, 
          borderRadius: 8,
          alignItems: 'center'
        }}
      >
        <ThemedText 
          lightColor="#2d5a2d" 
          darkColor="#a8d8a8"
          style={{ fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}
        >
          💡 Pro Tip
        </ThemedText>
        <ThemedText 
          lightColor="#2d5a2d" 
          darkColor="#90c690"
          style={{ fontSize: 14, textAlign: 'center', marginTop: 4 }}
        >
          ThemedView provides automatic background color adaptation,
          making your app feel native across all system appearances.
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}
