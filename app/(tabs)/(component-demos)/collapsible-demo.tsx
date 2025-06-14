/*
Collapsible Demo
----------------
This demo shows how to use the Collapsible component to create expandable/collapsible sections.

Usage Steps:
1. Import the Collapsible component:
   import { Collapsible } from '@/components/Collapsible';

2. Use the component in your JSX:
   <Collapsible title="Show More">
     <ThemedText>This content is hidden until expanded.</ThemedText>
   </Collapsible>

Props:
- title: string (required) – The title of the collapsible section.
- children: ReactNode – The content to show/hide when expanded.

To use Collapsible in another component, import it and provide a title and the content as children.
*/

import { Collapsible } from '../../../components/Collapsible';
import { ThemedText } from '../../../components/ThemedText';

export default function CollapsibleDemo() {
  return (
    <Collapsible title="Show More">
      <ThemedText>This content is hidden until expanded.</ThemedText>
    </Collapsible>
  );
}
