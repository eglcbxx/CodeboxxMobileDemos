import SimpleInput from '@/components/SimpleInput';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';

export default function SimpleInputDemo() {
  const styles = useThemedStyles();
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  return (
    <ScrollView style={{ flex: 1, padding: 16, ...styles.scrollViewBackground }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, ...styles.text }}>
        SimpleInput Component Demo
      </Text>

      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
        Basic Input:
      </Text>
      <SimpleInput
        value={text1}
        onChangeText={setText1}
        placeholder="Enter some text..."
      />

      <View style={{ height: 16 }} />

      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
        Styled Input:
      </Text>
      <SimpleInput
        value={text2}
        onChangeText={setText2}
        placeholder="Styled input example"
        style={{ borderColor: '#007AFF', borderWidth: 2 }}
      />

      <View style={{ height: 16 }} />

      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
        Password Input:
      </Text>
      <SimpleInput
        value={text3}
        onChangeText={setText3}
        placeholder="Enter password..."
        secureTextEntry={true}
      />
    </ScrollView>
  );
}