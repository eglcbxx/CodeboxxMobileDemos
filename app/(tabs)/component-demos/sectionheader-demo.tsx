/*
SectionHeader Demo
==================

What this demo shows:
This demo shows the SectionHeader component for creating consistent section dividers with optional action buttons or accessories.

What component you need:
You need the SectionHeader component from: /components/SectionHeader.tsx
You also need: CustomButton component from: /components/CustomButton.tsx
You also need: StyledText component from: /components/StyledText.tsx

How to copy and use in your project:
1. Copy the SectionHeader.tsx, CustomButton.tsx, and StyledText.tsx files to your components folder
2. Copy the import lines below
3. Copy the SectionHeader examples below and paste them in your screen

Code examples to copy:
*/

import CustomButton from '@/components/CustomButton';
import { SectionHeader } from '@/components/SectionHeader';
import StyledText from '@/components/StyledText';
import { useThemedStyles } from '@/hooks/useThemedStyles';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
{/* Import the section header component - copy this line */}

export default function SectionHeaderDemo() {
  const styles = useThemedStyles();
  return (
    <ScrollView style={[{ flex: 1, padding: 16 }, styles.scrollViewBackground]}>
      <Text style={[{ fontSize: 18, fontWeight: 'bold', marginBottom: 24 }, styles.text]}>
        SectionHeader Component Demo
      </Text>

      {/* Basic section header - copy this SectionHeader */}
      <SectionHeader title="Basic Section" />
      <View style={[{ padding: 16, borderRadius: 8, marginBottom: 24 }, styles.cardBackground]}>
        <StyledText type="paragraph">
          This is content under a basic section header. Perfect for simple organization.
        </StyledText>
      </View>

      {/* Section header with accessory button - copy this SectionHeader */}
      <SectionHeader 
        title="Settings" 
        accessory={
          <TouchableOpacity style={{ padding: 8 }}>
            <Text style={[{ fontSize: 16 }, styles.link]}>Edit</Text>
          </TouchableOpacity>
        }
      />
      <View style={[{ padding: 16, borderRadius: 8, marginBottom: 24 }, styles.cardBackground]}>
        <StyledText type="paragraph">
          This section has an accessory button on the right side. Great for actions like Edit, More, or Add.
        </StyledText>
      </View>

      {/* Custom styled section header - copy this SectionHeader */}
      <SectionHeader 
        title="Custom Styled Header" 
        titleStyle={{ color: '#ff6b35', fontSize: 20 }}
      />
      <View style={[{ padding: 16, borderRadius: 8, marginBottom: 24 }, styles.errorBackground]}>
        <StyledText type="paragraph">
          Section headers can be customized with different colors, sizes, and styles to match your design.
        </StyledText>
      </View>

      {/* Section header with custom button accessory - copy this SectionHeader */}
      <SectionHeader 
        title="Advanced Features" 
        accessory={
          <CustomButton
            title="View All"
            color="#007AFF"
            onPress={() => {}} // Add your action here
          />
        }
      />
      <View style={[{ padding: 16, borderRadius: 8, marginBottom: 24 }, styles.infoBackground]}>
        <StyledText type="paragraph">
          You can use any React component as an accessory - buttons, icons, badges, or custom elements.
        </StyledText>
      </View>

      {/* Section header with multiple accessories - copy this SectionHeader */}
      <SectionHeader 
        title="Multiple Items Section"
        titleType="subtitle"
        accessory={
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <TouchableOpacity style={[{ 
              paddingHorizontal: 12, 
              paddingVertical: 6, 
              borderRadius: 16 
            }, styles.successBackground]}>
              <Text style={[{ fontSize: 12, fontWeight: 'bold' }, styles.success]}>
                NEW
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[{ fontSize: 16 }, styles.caption]}>⋯</Text>
            </TouchableOpacity>
          </View>
        }
      />
      <View style={[{ padding: 16, borderRadius: 8, marginBottom: 24 }, styles.cardBackground]}>
        <StyledText type="paragraph">
          Complex accessories can include multiple elements like badges, icons, and action buttons.
        </StyledText>
      </View>

      <View style={[{ marginTop: 16, padding: 16, borderRadius: 8 }, styles.warningBackground]}>
        <Text style={[{ fontSize: 14, textAlign: 'center' }, styles.text]}>
          SectionHeaders help organize your content into clear, scannable sections.
          Perfect for settings screens, lists, forms, and content organization.
        </Text>
      </View>

      <SectionHeader title="Settings" />
      
      <View style={{ height: 20 }} />
      
      <SectionHeader title="Profile" />
      
      <View style={{ height: 20 }} />
      
      <SectionHeader title="Notifications" />
      
      <View style={{ height: 20 }} />
      
      <SectionHeader title="Security" />
      
      <View style={[{ marginTop: 40, padding: 20, borderRadius: 12 }, styles.lightCardBackground]}>
        <StyledText type="heading2" style={{ marginBottom: 12 }}>
          Sample Content Area
        </StyledText>
        <StyledText type="paragraph">
          SectionHeaders are perfect for organizing content into logical groups.
          They provide clear visual separation and can include interactive elements
          like buttons or icons.
        </StyledText>
        
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={[{ fontSize: 12, fontWeight: 'bold' }, styles.success]}>
              ACTIVE
            </Text>
            <StyledText type="paragraph">Feature Status</StyledText>
          </View>
          <Text style={[{ fontSize: 16 }, styles.caption]}>⋯</Text>
        </View>
      </View>
      
      <View style={{ marginTop: 40 }}>
        <Text style={[{ fontSize: 14, textAlign: 'center' }, styles.caption]}>
          SectionHeaders help create organized, professional-looking interfaces
          with clear content hierarchy and optional interactive elements.
        </Text>
      </View>
    </ScrollView>
  );
}
