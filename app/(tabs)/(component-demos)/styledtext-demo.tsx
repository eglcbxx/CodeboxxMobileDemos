/*
StyledText Demo
---------------
Copy the StyledText component for consistent typography throughout your app.
Perfect for maintaining text hierarchy with heading and body styles across your entire application.
*/

import { ScrollView, View } from 'react-native';
import StyledText from '../../../components/StyledText';
import { ThemedText } from '../../../components/ThemedText';

export default function StyledTextDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        StyledText Component Demo
      </ThemedText>

      <View style={{ gap: 16 }}>
        <StyledText type="heading1">Main Heading (H1)</StyledText>
        <StyledText type="paragraph">
          This is a paragraph that follows the main heading. It demonstrates the default paragraph styling with proper line height and font size.
        </StyledText>
        
        <StyledText type="heading2">Subheading (H2)</StyledText>
        <StyledText type="paragraph">
          Another paragraph under the subheading. StyledText ensures consistent typography across your entire application.
        </StyledText>
        
        <StyledText type="paragraph">
          You can also customize colors: 
          <StyledText type="paragraph" color="#007bff"> blue text</StyledText>, 
          <StyledText type="paragraph" color="#28a745"> green text</StyledText>, or 
          <StyledText type="paragraph" color="#dc3545"> red text</StyledText>.
        </StyledText>
        
        <StyledText type="caption" color="#666">
          This is caption text, perfect for small details, footnotes, or secondary information.
        </StyledText>
        
        <StyledText type="caption" color="#999">
          Another caption with a lighter color for even more subtle text.
        </StyledText>
      </View>
    </ScrollView>
  );
}