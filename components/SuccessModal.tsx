// components/SuccessModal.tsx
import { AdMobConfig } from "@/config/admob";
import { images } from "@/constants";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useRewardedAd } from "react-native-google-mobile-ads";
import Modal from "./Modal";
// import Button from "./ui/Button";

type Props = {
  visible: boolean;
  onClose: () => void;
  onRewardEarned?: (reward: { type: string; amount: number }) => void;
};

const SuccessModal = ({ visible, onClose, onRewardEarned }: Props) => {
  const { show } = useRewardedAd(AdMobConfig.rewarded);
  return (
    <Modal isVisible={visible} onClose={onClose}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Yayy!!</Text>
        <Text style={styles.modalMessage}>
          Your action was completed successfully. Thanks for engaging with the
          app!
        </Text>
        <Image
          source={images.bag}
          width={160}
          height={160}
          style={styles.image}
          resizeMode="cover"
        />
        <Button
          title="Watch Ads to Double Points"
          onPress={() => show}
          // style={{ marginTop: 20, width: "100%" }}
        />
      </View>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    width: "90%",
    alignItems: "center",

    alignSelf: "center",
    marginTop: "30%",
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    color: "#222",
  },
  modalMessage: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginTop: 16,
    lineHeight: 22,
    marginBottom: 12,
  },
  image: {
    width: 160,
    height: 120,
  },
});
