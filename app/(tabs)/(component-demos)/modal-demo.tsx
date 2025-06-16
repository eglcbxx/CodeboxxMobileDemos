/*
Modal Demo
----------
Copy the Modal component to create overlay dialogs and popups in your app.
Try the buttons below to see different modal configurations and interactions.
*/

import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import Modal from '../../../components/Modal';
import StyledText from '../../../components/StyledText';
import { ThemedText } from '../../../components/ThemedText';

export default function ModalDemo() {
  const [basicModal, setBasicModal] = useState(false);
  const [titleModal, setTitleModal] = useState(false);
  const [contentModal, setContentModal] = useState(false);

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
        Modal Component Demo
      </ThemedText>

      <View style={{ gap: 16 }}>
        <CustomButton
          title="Show Basic Modal"
          onPress={() => setBasicModal(true)}
          color="#007bff"
        />

        <CustomButton
          title="Show Modal with Title"
          onPress={() => setTitleModal(true)}
          color="#28a745"
        />

        <CustomButton
          title="Show Content-Rich Modal"
          onPress={() => setContentModal(true)}
          color="#dc3545"
        />
      </View>

      {/* Basic Modal */}
      <Modal visible={basicModal} onClose={() => setBasicModal(false)}>
        <StyledText type="paragraph">
          This is a simple modal dialog. Perfect for displaying quick messages,
          confirmations, or simple forms.
        </StyledText>
      </Modal>

      {/* Modal with Title */}
      <Modal 
        visible={titleModal} 
        onClose={() => setTitleModal(false)}
        title="Important Notice"
      >
        <StyledText type="paragraph">
          This modal includes a title for better organization and user context.
          Great for alerts, notifications, or categorized content.
        </StyledText>
      </Modal>

      {/* Content-Rich Modal */}
      <Modal 
        visible={contentModal} 
        onClose={() => setContentModal(false)}
        title="Rich Content Example"
      >
        <View style={{ gap: 16 }}>
          <StyledText type="heading2">Features</StyledText>
          <StyledText type="paragraph">
            • Overlay background with tap-to-dismiss{'\n'}
            • Smooth animations{'\n'}
            • Optional titles{'\n'}
            • Flexible content area{'\n'}
            • Accessible close button
          </StyledText>

          <View style={{ 
            backgroundColor: '#f0f8ff', 
            padding: 16, 
            borderRadius: 8,
            borderLeftWidth: 4,
            borderLeftColor: '#007AFF'
          }}>
            <StyledText type="paragraph" style={{ fontStyle: 'italic' }}>
              &ldquo;Modals are perfect for focused interactions without losing context 
              of the underlying screen.&rdquo;
            </StyledText>
          </View>

          <CustomButton
            title="Got it!"
            onPress={() => setContentModal(false)}
            color="#007bff"
          />
        </View>
      </Modal>

      <View style={{ marginTop: 32, padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
        <ThemedText style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>
          Tap outside any modal or use the close button to dismiss it.
          Perfect for forms, confirmations, image galleries, and more!
        </ThemedText>
      </View>
    </ScrollView>
  );
}
