/*
Switch Demo
-----------
Copy the Switch component for toggle controls and boolean settings.
Perfect for settings screens, form controls, and any on/off functionality.
*/

import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import StyledText from '../../../components/StyledText';
import Switch from '../../../components/Switch';
import { ThemedText } from '../../../components/ThemedText';

export default function SwitchDemo() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        Switch Component Demo
      </ThemedText>

      <View style={{ gap: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <StyledText type="paragraph">Enable Notifications</StyledText>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <StyledText type="paragraph">Dark Mode</StyledText>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <StyledText type="paragraph">Auto Save</StyledText>
          <Switch value={autoSave} onValueChange={setAutoSave} />
        </View>

        <View style={{ marginTop: 24, padding: 16, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
          <StyledText type="heading2">Current Settings:</StyledText>
          <StyledText>Notifications: {notifications ? 'Enabled' : 'Disabled'}</StyledText>
          <StyledText>Dark Mode: {darkMode ? 'On' : 'Off'}</StyledText>
          <StyledText>Auto Save: {autoSave ? 'Enabled' : 'Disabled'}</StyledText>
        </View>
      </View>
    </ScrollView>
  );
}
