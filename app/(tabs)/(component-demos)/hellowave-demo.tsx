/*
HelloWave Demo
--------------
Copy the HelloWave component to add an animated waving hand emoji to your app.
The animation triggers automatically and repeats for a friendly greeting effect.
*/

import { ScrollView, View } from 'react-native';
import { HelloWave } from '../../../components/HelloWave';
import { ThemedText } from '../../../components/ThemedText';

export default function HelloWaveDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        HelloWave Component
      </ThemedText>
      
      <View style={{ alignItems: 'center', marginBottom: 24 }}>
        <HelloWave />
      </View>
      
      <ThemedText style={{ textAlign: 'center', marginBottom: 24, fontSize: 16 }}>
        A simple animated wave greeting!
      </ThemedText>

      <View style={{ marginBottom: 24 }}>
        <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Usage Examples:
        </ThemedText>
        
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginBottom: 12,
          padding: 12,
          backgroundColor: '#f5f5f5',
          borderRadius: 8
        }}>
          <ThemedText style={{ fontSize: 16, marginRight: 8 }}>
            Welcome to our app!
          </ThemedText>
          <HelloWave />
        </View>

        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginBottom: 12,
          padding: 12,
          backgroundColor: '#f5f5f5',
          borderRadius: 8
        }}>
          <ThemedText style={{ fontSize: 16, marginRight: 8 }}>
            Hello there
          </ThemedText>
          <HelloWave />
          <ThemedText style={{ fontSize: 16, marginLeft: 8 }}>
            Nice to meet you!
          </ThemedText>
        </View>

        <View style={{ 
          alignItems: 'center',
          padding: 16,
          backgroundColor: '#e8f5e8',
          borderRadius: 8
        }}>
          <ThemedText style={{ fontSize: 18, marginBottom: 8 }}>
            Getting Started
          </ThemedText>
          <HelloWave />
          <ThemedText style={{ fontSize: 14, textAlign: 'center', marginTop: 8 }}>
            Perfect for welcome screens and greetings
          </ThemedText>
        </View>
      </View>

      <ThemedText style={{ fontSize: 12, color: '#666', textAlign: 'center' }}>
        The wave animation runs automatically when the component mounts.
        No props needed - just import and use!
      </ThemedText>
    </ScrollView>
  );
}
