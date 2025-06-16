/*
StyledText Demo
===============

What this demo shows:
This demo displays styled text with consistent typography patterns like headings and paragraphs for your app.

What component you need:
You need the StyledText component from: /components/StyledText.tsx

How to copy and use in your project:
1. Copy the StyledText.tsx file to your components folder
2. Copy the import line below: import StyledText from '@/components/StyledText';
3. Copy any of the StyledText examples below and paste them in your screen

Code examples to copy:
*/

import StyledText from '@/components/StyledText';
import { ScrollView, Text, View } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';

export default function StyledTextDemo() {
  const styles = useThemedStyles();
  return (
    <ScrollView style={{ flex: 1, padding: 16, ...styles.scrollViewBackground }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, ...styles.text }}>
        StyledText Component Demo
      </Text>

      <View style={{ gap: 16 }}>
        {/* Main heading - copy this line */}
        <StyledText type="heading1">Main Heading (H1)</StyledText>
        
        {/* Paragraph text - copy this line */}
        <StyledText type="paragraph">
          This is a paragraph that follows the main heading. It demonstrates the default paragraph styling with proper line height and font size.
        </StyledText>
        
        {/* Subheading - copy this line */}
        <StyledText type="heading2">Subheading (H2)</StyledText>
        
        {/* Another paragraph - copy this line */}
        <StyledText type="paragraph">
          Another paragraph under the subheading. StyledText ensures consistent typography across your entire application.
        </StyledText>
        
        {/* Smaller heading - copy this line */}
        <StyledText type="heading2">Smaller Heading (H2)</StyledText>
        
        {/* Custom colored text - copy this line */}
        <StyledText type="paragraph" color="#007bff">
          You can also customize colors for specific text elements like this blue paragraph.
        </StyledText>
        
        {/* Caption style text - copy this line */}
        <StyledText type="caption">
          This is caption text, perfect for image descriptions or footnotes.
        </StyledText>
      </View>
    </ScrollView>
  );
}