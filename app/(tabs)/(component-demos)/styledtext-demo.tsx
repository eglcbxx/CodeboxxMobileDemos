/*
StyledText Demo
--------------
This demo shows how to use the StyledText component for consistent, reusable text styles.

Usage Steps:
1. Import the StyledText component:
   import StyledText from '@/components/StyledText';

2. Use the component in your JSX for headings, paragraphs, and captions:
   <StyledText type="heading1">Heading 1</StyledText>
   <StyledText type="heading2">Heading 2</StyledText>
   <StyledText type="paragraph">This is a paragraph.</StyledText>
   <StyledText type="caption" color="#888">Small caption text.</StyledText>

Props:
- type?: 'heading1' | 'heading2' | 'paragraph' | 'caption' (default: 'paragraph') – The text style.
- color?: string – Text color (default: #333).
- style?: object – Additional style overrides.
- children: ReactNode – The text content.

To use StyledText in another component, import it and use the type prop to select the style you want, with optional color and style overrides.
*/

import StyledText from '@/components/StyledText';
import { ScrollView, View } from 'react-native';

export default function StyledTextDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        <StyledText type="heading1">Heading 1</StyledText>
        <StyledText type="heading2">Heading 2</StyledText>
        <StyledText type="paragraph">
          This is a paragraph. You can use the <StyledText type="caption">StyledText</StyledText> component for consistent text styles.
        </StyledText>
        <StyledText type="caption" color="#888">
          Small caption text.
        </StyledText>
      </View>
    </ScrollView>
  );
}