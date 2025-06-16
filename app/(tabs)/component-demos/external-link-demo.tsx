/*
ExternalLink Demo
=================

What this demo shows:
This demo displays clickable links that open websites in an in-app browser or new tab when tapped.

What component you need:
You need the ExternalLink component from: /components/ExternalLink.tsx

How to copy and use in your project:
1. Copy the ExternalLink.tsx file to your components folder
2. Copy the import line below: import { ExternalLink } from '@/components/ExternalLink';
3. Copy any of the ExternalLink examples below and paste them in your screen

Code examples to copy:
*/

import { ExternalLink } from '@/components/ExternalLink';
import { ScrollView, Text, View } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';

export default function ExternalLinkDemo() {
  const styles = useThemedStyles();
  return (
    <ScrollView style={{ flex: 1, padding: 16, ...styles.scrollViewBackground }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, ...styles.text }}>
        ExternalLink Component Demo
      </Text>
      
      {/* Inline link in text - copy this block */}
      <Text style={{ marginBottom: 8, ...styles.text }}>
        Visit <ExternalLink href="https://expo.dev">Expo</ExternalLink> for React Native development.
      </Text>
      
      {/* Another inline link - copy this block */}
      <Text style={{ marginBottom: 8, ...styles.text }}>
        Learn React at <ExternalLink href="https://react.dev">React.dev</ExternalLink>.
      </Text>
      
      {/* GitHub link example - copy this block */}
      <Text style={{ marginBottom: 8, ...styles.text }}>
        Check out <ExternalLink href="https://github.com">GitHub</ExternalLink> for code repositories.
      </Text>

      <View style={{ marginTop: 24 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
          Styled Links
        </Text>
        
        {/* Styled link with custom colors - copy this block */}
        <ExternalLink 
          href="https://docs.expo.dev" 
          style={{ 
            color: '#0066cc', 
            textDecorationLine: 'underline',
            fontSize: 16,
            marginBottom: 8
          }}
        >
          Expo Documentation (Styled)
        </ExternalLink>
        
        {/* Button-style link - copy this block */}
        <ExternalLink 
          href="https://reactnative.dev" 
          style={{ 
            backgroundColor: '#f0f0f0',
            padding: 12,
            borderRadius: 8,
            color: '#333',
            textAlign: 'center',
            marginTop: 8
          }}
        >
          React Native Docs (Button Style)
        </ExternalLink>
      </View>
    </ScrollView>
  );
}
