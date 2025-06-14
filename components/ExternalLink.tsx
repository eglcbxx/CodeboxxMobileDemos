/*
ExternalLink Component
---------------------
A link that opens URLs in an in-app browser on native, or a new tab on web.

Usage:
1. Import the component:
   import { ExternalLink } from './components/ExternalLink';

2. Use in your JSX:
   <ExternalLink href="https://example.com">Open Example</ExternalLink>

Props:
- href: string // The URL to open
- All other Link props from expo-router are supported
*/

import { Href, Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform } from 'react-native';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: Href & string };

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
      }}
    />
  );
}