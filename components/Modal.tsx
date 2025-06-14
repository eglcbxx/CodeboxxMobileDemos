/*
ReusableModal Usage Guide
------------------------
1. Import the modal component:
   import Modal from './components/Modal';

2. In your component, define a state to control modal visibility:
   const [modalVisible, setModalVisible] = useState(false);

3. Render the modal and pass required props:
   - visible: Boolean state to control modal visibility
   - onClose: Function to close the modal (e.g., setModalVisible(false))
   - title: (Optional) Title for the modal
   - children: Modal content

   Example:
   Place <ReusableModal visible={modalVisible} onClose={() => setModalVisible(false)} title="Your Modal Title">Your content here</Modal> in your render.

4. To open the modal, set modalVisible to true (e.g., on button press).
*/

import { Text, View } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Modal, Platform, StyleSheet, TouchableOpacity } from 'react-native';

interface ReusableModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

const ReusableModal: React.FC<ReusableModalProps> = ({ visible, onClose, title = 'Modal', children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          {children}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ReusableModal;
