import Wrapper from "@/components/ui/Wrapper";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ClaimScreen = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🎁</Text>
        </View>

        <Text style={styles.title}>Rewards Coming Soon!</Text>

        <Text style={styles.description}>
          We&apos;re working hard to bring you amazing rewards like gift cards,
          cash prizes, and exclusive perks.
        </Text>

        <View style={styles.streakReminder}>
          <Text style={styles.streakIcon}>🔥</Text>
          <Text style={styles.streakText}>
            Keep your streak alive to earn more points for when rewards launch!
          </Text>
        </View>

        <Text style={styles.footer}>Stay tuned, Wanderer ✨</Text>
      </View>
    </Wrapper>
  );
};

export default ClaimScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 24,
  },
  icon: {
    fontSize: 80,
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#bbb",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  streakReminder: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  streakIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  streakText: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    lineHeight: 22,
  },
  footer: {
    fontSize: 18,
    color: "#888",
    fontStyle: "italic",
    textAlign: "center",
  },
});
