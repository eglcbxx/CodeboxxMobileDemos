/*
SectionHeader Demo
-----------------
This demo shows how to use the SectionHeader component to display a section title with an optional accessory.

Usage Steps:
1. Import the SectionHeader component:
   import { SectionHeader } from '@/components/SectionHeader';

2. Use the component in your JSX:
   <SectionHeader title="Section Title" />
   <SectionHeader title="With Button" accessory={<Button title="Edit" onPress={...} />} />
   <SectionHeader title="Custom Style" titleStyle={{ color: 'blue' }} />

Props:
- title: string (required) – Section title text.
- titleType?: string – ThemedText type for title (default: 'title').
- titleStyle?: object – Style for the title.
- accessory?: ReactNode – Optional accessory (e.g., button, icon).
- style?: object – Container style.
- ...ThemedViewProps – Any other ThemedView props.

To use SectionHeader in another component, import it and provide the required title and any optional props for customization.
*/

import { SectionHeader } from '@/components/SectionHeader';
import { ScrollView, View } from 'react-native';

export default function SectionHeaderDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        <SectionHeader title="Section Title" />
      </View>
    </ScrollView>
  );
}
