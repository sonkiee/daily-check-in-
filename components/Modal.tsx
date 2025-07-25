import React from "react";
import {
  Pressable,
  Modal as RNModal,
  ModalProps as RNModalProps,
  StyleSheet,
  View,
} from "react-native";

export type ModalProps = RNModalProps & {
  isVisible: boolean;
  onClose: () => void; // It's simpler to just call onClose, which handles setting visibility.
  children: React.ReactNode;
};

const Modal = ({ isVisible, onClose, children, ...rest }: ModalProps) => {
  return (
    <RNModal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={onClose}
      {...rest}
    >
      <View style={styles.modalContainer}>{children}</View>
      <Pressable onPress={onClose} style={styles.overlay} />
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  modalContainer: {
    zIndex: 2,
  },
});
