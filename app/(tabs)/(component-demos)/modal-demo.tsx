/*
Modal Demo
----------
This demo shows how to use the Modal component to display content in a modal dialog.

Usage Steps:
1. Import the Modal component:
   import Modal from '@/components/Modal';

2. Use a state variable to control modal visibility:
   const [visible, setVisible] = useState(false);

3. Use the component in your JSX:
   <Modal visible={visible} onClose={() => setVisible(false)}>
     <StyledText type="paragraph">This is a modal!</StyledText>
   </Modal>

Props:
- visible: boolean (required) – Whether the modal is visible.
- onClose: () => void (required) – Callback to close the modal.
- title?: string – Optional modal title.
- children: ReactNode – Content inside the modal.

To use Modal in another component, import it, manage the visible state, and provide the required props and content.
*/

import Modal from '@/components/Modal';
import StyledText from '@/components/StyledText';
import { useState } from 'react';
import { Button, ScrollView } from 'react-native';

export default function ModalDemo() {
  const [visible, setVisible] = useState(false);
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Button title="Show Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <StyledText type="paragraph">This is a modal!</StyledText>
      </Modal>
    </ScrollView>
  );
}
