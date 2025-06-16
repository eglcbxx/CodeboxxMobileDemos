/**
 * Theme-aware styling utility for consistent light/dark mode support
 */

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useThemedStyles() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const insets = useSafeAreaInsets();

  return {
    // Background colors
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: insets.top,
    },
    
    safeContainer: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    },
    
    cardBackground: {
      backgroundColor: colorScheme === 'light' ? '#f8f9fa' : '#2c2c2e',
    },
    
    lightCardBackground: {
      backgroundColor: colorScheme === 'light' ? '#ffffff' : '#1c1c1e',
    },
    
    scrollViewBackground: {
      backgroundColor: colorScheme === 'light' ? '#f5f5f7' : '#000000',
    },
    
    safeScrollViewBackground: {
      backgroundColor: colorScheme === 'light' ? '#f5f5f7' : '#000000',
      paddingTop: insets.top,
    },

    // Text colors
    text: {
      color: colors.text,
    },
    
    heading: {
      color: colors.text,
      fontSize: 18,
      fontWeight: 'bold' as const,
    },
    
    subheading: {
      color: colors.text,
      fontSize: 16,
      fontWeight: '600' as const,
    },
    
    body: {
      color: colors.text,
      fontSize: 14,
    },
    
    caption: {
      color: colorScheme === 'light' ? '#666' : '#999',
      fontSize: 12,
    },
    
    title: {
      color: colors.text,
      fontSize: 20,
      fontWeight: 'bold' as const,
      marginBottom: 16,
    },
    
    contextBox: {
      backgroundColor: colorScheme === 'light' ? '#e8f4fd' : '#1a2a4a',
      padding: 16,
      borderRadius: 8,
      marginTop: 24,
    },
    
    contextText: {
      color: colorScheme === 'light' ? '#333' : '#ccc',
      fontSize: 14,
      textAlign: 'center' as const,
    },

    // Border colors
    border: {
      borderColor: colorScheme === 'light' ? '#e1e5e9' : '#3a3a3c',
    },
    
    separator: {
      backgroundColor: colorScheme === 'light' ? '#e1e5e9' : '#3a3a3c',
    },

    // Status colors (consistent across themes)
    success: {
      color: '#34c759',
    },
    
    warning: {
      color: '#ff9500',
    },
    
    error: {
      color: '#ff3b30',
    },
    
    info: {
      color: colors.tint,
    },

    // Background variants
    successBackground: {
      backgroundColor: colorScheme === 'light' ? '#e8f5e8' : '#1a4a1a',
    },
    
    warningBackground: {
      backgroundColor: colorScheme === 'light' ? '#fff5e0' : '#4a3a1a',
    },
    
    errorBackground: {
      backgroundColor: colorScheme === 'light' ? '#ffe0e0' : '#4a1a1a',
    },
    
    infoBackground: {
      backgroundColor: colorScheme === 'light' ? '#f0f8ff' : '#1a2a4a',
    },

    // Interactive elements
    button: {
      backgroundColor: colors.tint,
    },
    
    buttonText: {
      color: colorScheme === 'light' ? '#ffffff' : '#000000',
    },
    
    link: {
      color: colors.tint,
    },

    // Common utility styles
    shadow: colorScheme === 'light' ? {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    } : {
      shadowColor: '#fff',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
  };
}

export type ThemedStyles = ReturnType<typeof useThemedStyles>;
