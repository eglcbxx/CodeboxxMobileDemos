/*
InfoBlock Demo
--------------
Copy the InfoBlock component to create clean, organized content blocks with optional titles.
Perfect for displaying structured information in a visually appealing way.
*/

import { ScrollView, View } from 'react-native';
import { InfoBlock } from '../../../components/InfoBlock';
import { ThemedText } from '../../../components/ThemedText';

export default function InfoBlockDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <InfoBlock title="Welcome">
        <ThemedText style={{ lineHeight: 20 }}>
          This is an InfoBlock with a title. Perfect for organizing content 
          into clear, readable sections.
        </ThemedText>
      </InfoBlock>

      <View style={{ height: 16 }} />

      <InfoBlock>
        <ThemedText style={{ lineHeight: 20 }}>
          This InfoBlock has no title - just clean content in a structured layout.
          Great for simple information display without additional headers.
        </ThemedText>
      </InfoBlock>

      <View style={{ height: 16 }} />

      <InfoBlock title="Features">
        <ThemedText style={{ lineHeight: 20 }}>
          • Clean, minimal design{'\n'}
          • Optional title support{'\n'}
          • Flexible content area{'\n'}
          • Easy to customize{'\n'}
          • Works with any content type
        </ThemedText>
      </InfoBlock>

      <View style={{ height: 16 }} />

      <InfoBlock title="Rich Content Example">
        <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Subheading
        </ThemedText>
        <ThemedText style={{ lineHeight: 20, marginBottom: 12 }}>
          InfoBlocks can contain multiple elements, including text, images, 
          buttons, or any other React Native components.
        </ThemedText>
        <View style={{ 
          backgroundColor: '#e8f4fd', 
          padding: 12, 
          borderRadius: 8,
          borderLeftWidth: 4,
          borderLeftColor: '#007AFF'
        }}>
          <ThemedText style={{ fontStyle: 'italic' }}>
            "This is a highlighted quote or important note within the InfoBlock."
          </ThemedText>
        </View>
      </InfoBlock>

      <View style={{ height: 16 }} />

      <InfoBlock title="Usage Tips">
        <ThemedText style={{ lineHeight: 20 }}>
          Use InfoBlocks for FAQs, help sections, feature descriptions, 
          or any content that benefits from clear visual organization.
        </ThemedText>
      </InfoBlock>
    </ScrollView>
  );
}