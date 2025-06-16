/*
Collapsible Demo
================

What this demo shows:
This demo displays expandable sections that users can tap to show or hide content, perfect for FAQs or organizing information.

What component you need:
You need the Collapsible component from: /components/Collapsible.tsx

How to copy and use in your project:
1. Copy the Collapsible.tsx file to your components folder
2. Copy the import line below: import { Collapsible } from '@/components/Collapsible';
3. Copy any of the Collapsible examples below and paste them in your screen

Code examples to copy:
*/

import { Collapsible } from '@/components/Collapsible';
import { ScrollView, Text, View } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';

export default function CollapsibleDemo() {
  const styles = useThemedStyles();
  return (
    <ScrollView style={{ flex: 1, padding: 16, ...styles.scrollViewBackground }}>
      {/* Basic collapsible section - copy this block */}
      <Collapsible title="Getting Started">
        <Text style={{ paddingVertical: 8, ...styles.text }}>
          Welcome! This is a collapsible section that you can expand and collapse by tapping the header.
          Perfect for organizing content into manageable sections.
        </Text>
      </Collapsible>

      <View style={{ height: 16 }} />

      {/* Features list collapsible - copy this block */}
      <Collapsible title="Features">
        <Text style={{ paddingVertical: 8, ...styles.text }}>
          • Smooth expand/collapse animations{'\n'}
          • Clean, minimal design{'\n'}
          • Easy to customize{'\n'}
          • Works with any content
        </Text>
      </Collapsible>

      <View style={{ height: 16 }} />

      {/* Instructions collapsible - copy this block */}
      <Collapsible title="Usage Instructions">
        <Text style={{ paddingVertical: 8, ...styles.text }}>
          Simply import the Collapsible component and wrap your content inside it.
          Provide a title prop for the header text.
        </Text>
      </Collapsible>

      <View style={{ height: 16 }} />

      <Collapsible title="More Information">
        <Text style={{ paddingVertical: 8, ...styles.text }}>
          This component is perfect for FAQs, help sections, settings panels,
          or any content that benefits from being hidden until needed.
        </Text>
      </Collapsible>
    </ScrollView>
  );
}
