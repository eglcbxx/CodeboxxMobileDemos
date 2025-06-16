import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Tabs
        initialRouteName="component-demos"
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
          tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
              height: 60,
              paddingBottom: 8,
              paddingTop: 8,
            },
            default: {
              height: 60,
              paddingBottom: 8,
              paddingTop: 8,
              backgroundColor: colorScheme === 'dark' ? '#1C1C1E' : '#F2F2F7',
              borderTopColor: colorScheme === 'dark' ? '#38383A' : '#C6C6C8',
              borderTopWidth: 1,
            },
          }),
        }}
      >
        <Tabs.Screen
          name="component-demos"
          options={{
            title: 'Component Demos',
            tabBarIcon: ({ color }) => (
              <Octicons name="stack" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="concept-demos"
          options={{
            title: 'Concept Demos',
            tabBarIcon: ({ color }) => (
              <Ionicons name="school" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}