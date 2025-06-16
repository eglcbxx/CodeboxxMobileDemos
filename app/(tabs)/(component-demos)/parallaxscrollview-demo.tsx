/*
ParallaxScrollView Demo
----------------------
Copy the ParallaxScrollView component to create scrollable views with parallax header effects.
Scroll down to see the header image animate and fade as you navigate through content.
*/

import { Image, View } from 'react-native';
import ParallaxScrollView from '../../../components/ParallaxScrollView';
import StyledText from '../../../components/StyledText';
import { ThemedText } from '../../../components/ThemedText';

export default function ParallaxScrollViewDemo() {
  return (
    <ParallaxScrollView
      headerImage={
        <Image 
          source={{ uri: 'https://picsum.photos/400/300' }}
          style={{ width: 300, height: 200, borderRadius: 12 }}
        />
      }
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    >
      <View style={{ padding: 16 }}>
        <ThemedText style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
          Parallax Scroll View
        </ThemedText>
        
        <StyledText type="paragraph" style={{ marginBottom: 16 }}>
          This component creates a beautiful parallax effect where the header image
          and background animate as you scroll through the content.
        </StyledText>

        <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>
          Key Features:
        </ThemedText>
        
        <View style={{ marginBottom: 20 }}>
          <StyledText type="paragraph">
            • Smooth parallax scrolling animation{'\n'}
            • Customizable header image{'\n'}
            • Adaptive light/dark backgrounds{'\n'}
            • Responsive design{'\n'}
            • Easy to implement
          </StyledText>
        </View>

        <View style={{ 
          backgroundColor: '#f8f9fa', 
          padding: 16, 
          borderRadius: 8,
          marginBottom: 20 
        }}>
          <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
            Perfect For:
          </ThemedText>
          <StyledText type="paragraph">
            Profile screens, product details, article headers, landing pages,
            and any content that benefits from an engaging visual introduction.
          </StyledText>
        </View>

        <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>
          How It Works
        </ThemedText>
        
        <StyledText type="paragraph" style={{ marginBottom: 16 }}>
          The header image stays in a fixed position while the content scrolls over it,
          creating a depth effect. The background color adapts to your app's theme.
        </StyledText>

        <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
          <StyledText type="paragraph" style={{ textAlign: 'center', fontStyle: 'italic' }}>
            Keep scrolling to see more of the parallax effect...
          </StyledText>
        </View>

        <View style={{ 
          backgroundColor: '#e8f5e8', 
          padding: 20, 
          borderRadius: 12,
          marginBottom: 20 
        }}>
          <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
            Implementation Tip:
          </ThemedText>
          <StyledText type="paragraph">
            Choose high-quality images that look good when partially obscured.
            The header area is perfect for hero images, logos, or decorative graphics.
          </StyledText>
        </View>

        <StyledText type="paragraph" style={{ marginBottom: 40 }}>
          This scrollable content area can contain any React Native components:
          text, images, buttons, forms, lists, and more. The parallax effect
          provides a professional, modern feel to your app's user interface.
        </StyledText>

        <View style={{ 
          backgroundColor: '#fff3cd', 
          padding: 16, 
          borderRadius: 8,
          borderLeftWidth: 4,
          borderLeftColor: '#ffc107'
        }}>
          <StyledText type="paragraph" style={{ fontWeight: 'bold' }}>
            Try scrolling back up to see the reverse parallax effect!
          </StyledText>
        </View>
      </View>
    </ParallaxScrollView>
  );
}
