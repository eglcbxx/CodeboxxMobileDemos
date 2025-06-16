/*
SimpleInput Demo
----------------
Copy the SimpleInput component to create text input fields with labels and various configurations.
Perfect for forms, user input, and text collection with clean, accessible design.
*/

import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import SimpleInput from '../../../components/SimpleInput';
import StyledText from '../../../components/StyledText';
import { ThemedText } from '../../../components/ThemedText';

export default function SimpleInputDemo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        SimpleInput Component Demo
      </ThemedText>

      <View style={{ gap: 16 }}>
        <SimpleInput
          label="Full Name"
          value={name}
          onChangeText={setName}
          placeholder="Enter your full name"
        />
        
        <SimpleInput
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <SimpleInput
          label="Message"
          value={message}
          onChangeText={setMessage}
          placeholder="Enter your message here..."
          multiline
          numberOfLines={4}
        />
        
        <SimpleInput
          value=""
          onChangeText={() => {}}
          placeholder="Input without label"
        />
        
        <View style={{ marginTop: 16, padding: 16, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
          <StyledText type="heading2">Current Values:</StyledText>
          <StyledText>Name: {name || '(empty)'}</StyledText>
          <StyledText>Email: {email || '(empty)'}</StyledText>
          <StyledText>Message: {message || '(empty)'}</StyledText>
        </View>
      </View>
    </ScrollView>
  );
}
