/*
ExternalLink Demo
-----------------
Copy the ExternalLink component to create links that open in an in-app browser or new tab.
Try tapping the links below to see how they open external websites.
*/

import { ScrollView, View } from 'react-native';
import { ExternalLink } from '../../../components/ExternalLink';
import { ThemedText } from '../../../components/ThemedText';

export default function ExternalLinkDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        External Links
      </ThemedText>
      
      <ThemedText style={{ marginBottom: 8 }}>
        Visit <ExternalLink href="https://expo.dev">Expo</ExternalLink> for React Native development.
      </ThemedText>
      
      <ThemedText style={{ marginBottom: 8 }}>
        Learn React at <ExternalLink href="https://react.dev">React.dev</ExternalLink>.
      </ThemedText>
      
      <ThemedText style={{ marginBottom: 8 }}>
        Check out <ExternalLink href="https://github.com">GitHub</ExternalLink> for code repositories.
      </ThemedText>

      <View style={{ marginTop: 24 }}>
        <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Styled Links
        </ThemedText>
        
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
        
        <ExternalLink 
          href="https://reactnative.dev" 
          style={{ 
            backgroundColor: '#f0f0f0',
            padding: 12,
            borderRadius: 8,
            color: '#333',
            textAlign: 'center'
          }}
        >
          React Native Docs (Button Style)
        </ExternalLink>
      </View>
    </ScrollView>
  );
}
