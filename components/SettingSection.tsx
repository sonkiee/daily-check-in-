import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface SettingSectionProps {
  title: string;
  children: React.ReactNode;
}

const SettingSection = ({ title, children }: SettingSectionProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>{children}</View>
  </View>
);

export default SettingSection;

const styles = StyleSheet.create({
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#888",
    fontWeight: "600",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  sectionContent: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
    overflow: "hidden",
  },
});
