/*
Collapsible Demo
----------------
Copy the Collapsible component to create expandable/collapsible content sections.
Try tapping the headers below to see the expand/collapse functionality.
*/

import { ScrollView, View } from 'react-native';
import { Collapsible } from '../../../components/Collapsible';
import { ThemedText } from '../../../components/ThemedText';

export default function CollapsibleDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Collapsible title="Getting Started">
        <ThemedText style={{ paddingVertical: 8 }}>
          Welcome! This is a collapsible section that you can expand and collapse by tapping the header.
          Perfect for organizing content into manageable sections.
        </ThemedText>
      </Collapsible>

      <View style={{ height: 16 }} />

      <Collapsible title="Features">
        <ThemedText style={{ paddingVertical: 8 }}>
          • Smooth expand/collapse animations{'\n'}
          • Clean, minimal design{'\n'}
          • Easy to customize{'\n'}
          • Works with any content
        </ThemedText>
      </Collapsible>

      <View style={{ height: 16 }} />

      <Collapsible title="Usage Instructions">
        <ThemedText style={{ paddingVertical: 8 }}>
          Simply import the Collapsible component and wrap your content inside it.
          Provide a title prop for the header text.
        </ThemedText>
      </Collapsible>

      <View style={{ height: 16 }} />

      <Collapsible title="More Information">
        <ThemedText style={{ paddingVertical: 8 }}>
          This component is perfect for FAQs, help sections, settings panels,
          or any content that benefits from being hidden until needed.
        </ThemedText>
      </Collapsible>
    </ScrollView>
  );
}
