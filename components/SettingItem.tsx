import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface SettingItemProps {
  title: string;
  subtitle?: string;
  onPress?: () => void;
  rightComponent?: React.ReactNode;
  showArrow?: boolean;
}

const SettingItem = ({
  title,
  subtitle,
  onPress,
  rightComponent,
  showArrow = false,
}: SettingItemProps) => (
  <View style={styles.settingItem} onTouchEnd={onPress}>
    <View style={styles.settingContent}>
      <Text style={styles.settingTitle}>{title}</Text>
      {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
    </View>
    <View style={styles.settingRight}>
      {rightComponent}
      {showArrow && <Text style={styles.arrow}>›</Text>}
    </View>
  </View>
);

export default SettingItem;

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 13,
    color: "#888",
    lineHeight: 18,
  },
  settingRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  arrow: {
    fontSize: 20,
    color: "#666",
    fontWeight: "300",
  },
});
