import SettingItem from "@/components/SettingItem";
import Wrapper from "@/components/ui/Wrapper";
import { useUserStore } from "@/store/user";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [dailyReminders, setDailyReminders] = useState(true);
  const [streakReminders, setStreakReminders] = useState(false);

  const { clearUser } = useUserStore();
  const { user, accessToken } = useUserStore.getState();
  console.log("User after logout:", user, accessToken);

  const handleNotificationSettings = () =>
    Alert.alert(
      "Notification Settings",
      "Configure your notification preferences"
    );

  const handleSupport = () => Alert.alert("Support", "Get help and support");

  const handleAbout = async () =>
    Alert.alert("About", "App version 1.0.0\nBuilt with React Native");

  const handleLogout = async () => {
    const response = await clearUser();

    if (response) {
      Alert.alert("Logged out", "You have cleared your session");
    } else {
      Alert.alert("Oops", "Something went wrong while logging out.");
    }
  };

  return (
    <Wrapper>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        <SettingSection title="Notifications">
          <SettingItem
            title="Push Notifications"
            subtitle="Receive notifications for daily check-ins"
            rightComponent={
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: "#333", true: "#4CAF50" }}
                thumbColor={notifications ? "#fff" : "#ccc"}
              />
            }
          />
          <SettingItem
            title="Daily Reminders"
            subtitle="Get reminded to check in daily"
            rightComponent={
              <Switch
                value={dailyReminders}
                onValueChange={setDailyReminders}
                trackColor={{ false: "#333", true: "#4CAF50" }}
                thumbColor={dailyReminders ? "#fff" : "#ccc"}
              />
            }
          />
          <SettingItem
            title="Streak Reminders"
            subtitle="Alert when streak is at risk"
            rightComponent={
              <Switch
                value={streakReminders}
                onValueChange={setStreakReminders}
                trackColor={{ false: "#333", true: "#4CAF50" }}
                thumbColor={streakReminders ? "#fff" : "#ccc"}
              />
            }
          />
          <SettingItem
            title="Notification Time"
            subtitle="9:00 AM"
            onPress={handleNotificationSettings}
            showArrow
          />
        </SettingSection>

        <SettingSection title="Support">
          <SettingItem
            title="Help & Support"
            subtitle="Get help and contact support"
            onPress={handleSupport}
            showArrow
          />
          <SettingItem
            title="About"
            subtitle="App information and version"
            onPress={handleAbout}
            showArrow
          />
        </SettingSection>

        <TouchableOpacity style={styles.footer} onPress={handleLogout}>
          <Text style={styles.footerText}>Wanderer v1.0.0</Text>
          <Text style={styles.footerSubtext}>
            Made with ♥ for daily mindfulness
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Wrapper>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
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

  footer: {
    alignItems: "center",
    paddingVertical: 40,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: "#555",
    fontStyle: "italic",
  },
});
