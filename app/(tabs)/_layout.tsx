import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: true,
      headerTitleAlign: 'center', // Ensures title is centered on all platforms
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarStyle: Platform.select({
        ios: {
        position: 'absolute',
        },
        default: {},
      }),
      }}>
      <Tabs.Screen
      name="(component-demos)"
      options={{
        title: 'Component Demos',
        tabBarIcon: ({ color }) => <Octicons size={28} name="stack" color={color} />,
        headerTitleAlign: 'center',
      }}
      />
      <Tabs.Screen
      name="(concept-demos)"
      options={{
        title: 'Concept Demos',
        tabBarIcon: ({ color }) => <Ionicons size={28} name="school" color={color} />,
        headerTitleAlign: 'center',
      }}
      />
    </Tabs>
  );
}