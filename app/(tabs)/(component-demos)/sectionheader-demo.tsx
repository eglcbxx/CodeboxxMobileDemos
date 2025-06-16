/*
SectionHeader Demo
-----------------
Copy the SectionHeader component to create consistent section dividers with optional accessories.
Perfect for organizing content into clear, labeled sections with optional action buttons.
*/

import { ScrollView, TouchableOpacity, View } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import { SectionHeader } from '../../../components/SectionHeader';
import StyledText from '../../../components/StyledText';
import { ThemedText } from '../../../components/ThemedText';

export default function SectionHeaderDemo() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 24 }}>
        SectionHeader Component Demo
      </ThemedText>

      <SectionHeader title="Basic Section" />
      <View style={{ padding: 16, backgroundColor: '#f8f9fa', borderRadius: 8, marginBottom: 24 }}>
        <StyledText type="paragraph">
          This is content under a basic section header. Perfect for simple organization.
        </StyledText>
      </View>

      <SectionHeader 
        title="Settings" 
        accessory={
          <TouchableOpacity style={{ padding: 8 }}>
            <ThemedText style={{ color: '#007AFF', fontSize: 16 }}>Edit</ThemedText>
          </TouchableOpacity>
        }
      />
      <View style={{ padding: 16, backgroundColor: '#f8f9fa', borderRadius: 8, marginBottom: 24 }}>
        <StyledText type="paragraph">
          This section has an accessory button on the right side. Great for actions like Edit, More, or Add.
        </StyledText>
      </View>

      <SectionHeader 
        title="Custom Styled Header" 
        titleStyle={{ color: '#ff6b35', fontSize: 20 }}
      />
      <View style={{ padding: 16, backgroundColor: '#fff5f5', borderRadius: 8, marginBottom: 24 }}>
        <StyledText type="paragraph">
          Section headers can be customized with different colors, sizes, and styles to match your design.
        </StyledText>
      </View>

      <SectionHeader 
        title="Advanced Features" 
        accessory={
          <CustomButton
            title="View All"
            color="#007AFF"
            onPress={() => {}}
          />
        }
      />
      <View style={{ padding: 16, backgroundColor: '#f0f8ff', borderRadius: 8, marginBottom: 24 }}>
        <StyledText type="paragraph">
          You can use any React component as an accessory - buttons, icons, badges, or custom elements.
        </StyledText>
      </View>

      <SectionHeader 
        title="Multiple Items Section"
        titleType="subtitle"
        accessory={
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <TouchableOpacity style={{ 
              backgroundColor: '#e8f5e8', 
              paddingHorizontal: 12, 
              paddingVertical: 6, 
              borderRadius: 16 
            }}>
              <ThemedText style={{ color: '#34c759', fontSize: 12, fontWeight: 'bold' }}>
                NEW
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity>
              <ThemedText style={{ color: '#666', fontSize: 16 }}>⋯</ThemedText>
            </TouchableOpacity>
          </View>
        }
      />
      <View style={{ padding: 16, backgroundColor: '#f8f9fa', borderRadius: 8, marginBottom: 24 }}>
        <StyledText type="paragraph">
          Complex accessories can include multiple elements like badges, icons, and action buttons.
        </StyledText>
      </View>

      <View style={{ marginTop: 16, padding: 16, backgroundColor: '#fffbf0', borderRadius: 8 }}>
        <ThemedText style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>
          SectionHeaders help organize your content into clear, scannable sections.
          Perfect for settings screens, lists, forms, and content organization.
        </ThemedText>
      </View>
    </ScrollView>
  );
}
