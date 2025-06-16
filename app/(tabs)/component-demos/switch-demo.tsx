/*
Switch Demo
===========

This demo displays toggle switches that users can tap to turn settings on or off, like enabling notifications or dark mode.

What component you need:
You need the Switch component from: /components/Switch.tsx
You also need: StyledText component from: /components/StyledText.tsx

How to copy and use in your project:
1. Copy the Switch.tsx and StyledText.tsx files to your components folder
2. Copy the import lines below
3. Copy the useState and Switch examples below and paste them in your screen

Code examples to copy:
*/

import StyledText from '@/components/StyledText';
import Switch from '@/components/Switch';
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function SwitchDemo() {
  const styles = useThemedStyles();
  // State management for switches - copy these lines
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      <Text style={[{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }, styles.text]}>
        Switch Component Demo
      </Text>

      <View style={{ gap: 20 }}>
        {/* Notifications switch - copy this block */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <StyledText type="paragraph">Enable Notifications</StyledText>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>
        
        {/* Dark mode switch - copy this block */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <StyledText type="paragraph">Dark Mode</StyledText>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        {/* Auto-save switch - copy this block */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <StyledText type="paragraph">Auto-Save Documents</StyledText>
          <Switch value={autoSave} onValueChange={setAutoSave} />
        </View>

        {/* Current settings display - copy this block */}
        <View style={[{ padding: 16, borderRadius: 8, marginTop: 16 }, styles.cardBackground]}>
          <StyledText type="heading2" style={{ marginBottom: 8 }}>Current Settings:</StyledText>
          <StyledText type="paragraph">Notifications: {notifications ? 'Enabled' : 'Disabled'}</StyledText>
          <StyledText type="paragraph">Dark Mode: {darkMode ? 'Enabled' : 'Disabled'}</StyledText>
          <StyledText type="paragraph">Auto-Save: {autoSave ? 'Enabled' : 'Disabled'}</StyledText>
        </View>
      </View>
    </ScrollView>
  );
}
