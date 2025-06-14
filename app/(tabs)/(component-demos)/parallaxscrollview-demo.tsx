/*
ParallaxScrollView Demo
----------------------
This demo shows how to use the ParallaxScrollView component to create a scrollable view with a parallax header effect.

Usage Steps:
1. Import the ParallaxScrollView component:
   import ParallaxScrollView from '@/components/ParallaxScrollView';

2. Use the component in your JSX, providing a headerImage and headerBackgroundColor:
   <ParallaxScrollView
     headerImage={<Image source={require('path/to/image.png')} style={{ width: 120, height: 120 }} />}
     headerBackgroundColor={{ light: '#fff', dark: '#222' }}
   >
     <ThemedText>Content goes here</ThemedText>
   </ParallaxScrollView>

Props:
- headerImage: ReactElement (required) – The image or element to display in the header.
- headerBackgroundColor: { light: string; dark: string } (required) – Header background colors for light/dark mode.
- children: ReactNode – Content to display below the header.

To use ParallaxScrollView in another component, import it and provide the required headerImage and headerBackgroundColor props, and place your content as children.
*/

import { Image } from 'react-native';
import ParallaxScrollView from '../../../components/ParallaxScrollView';
import { ThemedText } from '../../../components/ThemedText';

export default function ParallaxScrollViewDemo() {
  return (
    <ParallaxScrollView
      headerImage={<Image source={require('../../../assets/images/CodeboxxFavicon.png')} style={{ height: 290, width: 290, bottom: 0, left: 0, position: 'absolute', }} />}
      headerBackgroundColor={{ light: '#fff', dark: '#222' }}
    >
      <ThemedText>This is a parallax scroll view demo.</ThemedText>
    </ParallaxScrollView>
  );
}
