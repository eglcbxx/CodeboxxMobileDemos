/*
Modal Demo
==========

What this demo shows:
This demo displays popup overlay dialogs that appear over your screen content, useful for alerts, forms, or detailed information.

What component you need:
You need the Modal component from: /components/Modal.tsx
You also need: CustomButton component from: /components/CustomButton.tsx
You also need: StyledText component from: /components/StyledText.tsx

How to copy and use in your project:
1. Copy the Modal.tsx, CustomButton.tsx, and StyledText.tsx files to your components folder
2. Copy the import lines below
3. Copy the useState and modal examples below and paste them in your screen

Code examples to copy:
*/

import CustomButton from '@/components/CustomButton';
import Modal from '@/components/Modal';
import StyledText from '@/components/StyledText';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';

export default function ModalDemo() {
  const styles = useThemedStyles();
  // State management for modals - copy these lines
  const [basicModal, setBasicModal] = useState(false);
  const [titleModal, setTitleModal] = useState(false);
  const [contentModal, setContentModal] = useState(false);

  return (
    <ScrollView style={{ flex: 1, padding: 16, ...styles.scrollViewBackground }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, ...styles.text }}>
        Modal Component Demo
      </Text>

      <View style={{ gap: 16 }}>
        {/* Button to show basic modal - copy this block */}
        <CustomButton
          title="Show Basic Modal"
          onPress={() => setBasicModal(true)}
          color="#007bff"
        />

        {/* Button to show modal with title - copy this block */}
        <CustomButton
          title="Show Modal with Title"
          onPress={() => setTitleModal(true)}
          color="#28a745"
        />

        {/* Button to show content-rich modal - copy this block */}
        <CustomButton
          title="Show Content-Rich Modal"
          onPress={() => setContentModal(true)}
          color="#dc3545"
        />
      </View>

      {/* Basic Modal - copy this entire block */}
      <Modal visible={basicModal} onClose={() => setBasicModal(false)}>
        <StyledText type="paragraph">
          This is a simple modal dialog. Perfect for displaying quick messages,
          confirmations, or simple forms.
        </StyledText>
      </Modal>

      {/* Modal with Title - copy this entire block */}
      <Modal 
        visible={titleModal} 
        onClose={() => setTitleModal(false)}
        title="Important Notice"
      >
        <StyledText type="paragraph">
          This modal includes a title for better organization and user context.
          Great for more formal dialogs and notifications.
        </StyledText>
      </Modal>

      {/* Content-Rich Modal - copy this entire block */}
      <Modal 
        visible={contentModal} 
        onClose={() => setContentModal(false)}
        title="Detailed Information"
      >
        <View style={{ gap: 12 }}>
          <StyledText type="paragraph">
            This modal demonstrates how you can include rich content like multiple paragraphs,
            lists, and other components within a modal dialog.
          </StyledText>
          
          <StyledText type="paragraph">
            • Feature 1: Easy to customize
          </StyledText>
          <StyledText type="paragraph">
            • Feature 2: Responsive design
          </StyledText>
          <StyledText type="paragraph">
            • Feature 3: Smooth animations
          </StyledText>
          
          <View style={{ marginTop: 16 }}>
            <CustomButton
              title="Close Modal"
              onPress={() => setContentModal(false)}
              color="#6c757d"
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}