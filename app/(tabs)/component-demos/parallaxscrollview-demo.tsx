import ParallaxScrollView from '@/components/ParallaxScrollView';
import StyledText from '@/components/StyledText';
import { Image, Text, View } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';

export default function ParallaxScrollViewDemo() {
  const styles = useThemedStyles();
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
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, ...styles.text }}>
          Parallax Scroll View
        </Text>
        
        <StyledText type="paragraph" style={{ marginBottom: 16 }}>
          This component creates a beautiful parallax effect where the header image
          and background animate as you scroll through the content.
        </StyledText>

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12, ...styles.text }}>
          Key Features:
        </Text>
        
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
          ...styles.cardBackground, 
          padding: 16, 
          borderRadius: 8,
          marginBottom: 20 
        }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
            Perfect For:
          </Text>
          <StyledText type="paragraph">
            Profile screens, product details, article headers, landing pages,
            and any content that benefits from an engaging visual introduction.
          </StyledText>
        </View>

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12, ...styles.text }}>
          How It Works
        </Text>
        
        <StyledText type="paragraph" style={{ marginBottom: 16 }}>
          The header image stays in a fixed position while the content scrolls over it,
          creating a depth effect. The background color adapts to your app&apos;s theme.
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
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, ...styles.text }}>
            Implementation Tip:
          </Text>
          <StyledText type="paragraph">
            Choose high-quality images that look good when partially obscured.
            The header area is perfect for hero images, logos, or decorative graphics.
          </StyledText>
        </View>

        <StyledText type="paragraph" style={{ marginBottom: 40 }}>
          This scrollable content area can contain any React Native components:
          text, images, buttons, forms, lists, and more. The parallax effect
          provides a professional, modern feel to your app&apos;s user interface.
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
