/*
InfoBlock Demo
--------------
This demo shows how to use the InfoBlock component to display a block with an optional title and content.

Usage Steps:
1. Import the InfoBlock component:
   import { InfoBlock } from '@/components/InfoBlock';

2. Use the component in your JSX:
   <InfoBlock title="Info Title">
     <StyledText>This is an info block.</StyledText>
   </InfoBlock>

Props:
- title?: string – Optional block title.
- titleType?: string – ThemedText type for the title (default: 'subtitle').
- titleStyle?: object – Style for the title.
- children: ReactNode – Content inside the block.
- style?: object – Container style.

To use InfoBlock in another component, import it and provide the optional title and children as content.
*/

import { InfoBlock } from '@/components/InfoBlock';
import StyledText from '@/components/StyledText';
import { ScrollView, View } from 'react-native';

export default function InfoBlockDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 16, marginVertical: 16 }}>
        <InfoBlock title="Info Title">
          <StyledText>This is an info block.</StyledText>
        </InfoBlock>
      </View>
    </ScrollView>
  );
}