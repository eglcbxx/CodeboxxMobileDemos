/*
ExternalLink Demo
-----------------
This demo shows how to use the ExternalLink component to open URLs in an in-app browser (native) or a new tab (web).

Usage Steps:
1. Import the ExternalLink component:
   import { ExternalLink } from '@/components/ExternalLink';

2. Use the component in your JSX:
   <ExternalLink href="https://expo.dev">Expo</ExternalLink>

Props:
- href: string (required) – The URL to open when the link is pressed.
- All other props from expo-router's Link component are supported (e.g., style, children).

To use ExternalLink in another component, import it and provide the required href and any children (link text or elements).
*/

import { ExternalLink } from '../../../components/ExternalLink';
import { ThemedText } from '../../../components/ThemedText';

export default function ExternalLinkDemo() {
  return (
    <ThemedText>
      Visit <ExternalLink href="https://expo.dev">Expo</ExternalLink> for more info.
    </ThemedText>
  );
}
