import Wrapper from "@/components/ui/Wrapper";
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
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <View style={styles.settingContent}>
      <Text style={styles.settingTitle}>{title}</Text>
      {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
    </View>
    <View style={styles.settingRight}>
      {rightComponent}
      {showArrow && <Text style={styles.arrow}>›</Text>}
    </View>
  </TouchableOpacity>
);

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

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [dailyReminders, setDailyReminders] = useState(true);
  const [streakReminders, setStreakReminders] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hapticFeedback, setHapticFeedback] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleNotificationSettings = () => {
    Alert.alert(
      "Notification Settings",
      "Configure your notification preferences"
    );
  };

  const handleAccount = () => {
    Alert.alert("Account", "Manage your account settings");
  };

  const handlePrivacy = () => {
    Alert.alert("Privacy", "Review privacy settings");
  };

  const handleSupport = () => {
    Alert.alert("Support", "Get help and support");
  };

  const handleAbout = () => {
    Alert.alert("About", "App version 1.0.0\nBuilt with React Native");
  };

  const handleResetProgress = () => {
    Alert.alert(
      "Reset Progress",
      "Are you sure you want to reset all your progress? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress: () => {
            Alert.alert("Progress Reset", "Your progress has been reset.");
          },
        },
      ]
    );
  };

  const handleExportData = () => {
    Alert.alert("Export Data", "Your data export will be available shortly");
  };

  return (
    <Wrapper>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Settings</Text>

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

        <SettingSection title="Experience">
          <SettingItem
            title="Sound Effects"
            subtitle="Play sounds for interactions"
            rightComponent={
              <Switch
                value={soundEnabled}
                onValueChange={setSoundEnabled}
                trackColor={{ false: "#333", true: "#4CAF50" }}
                thumbColor={soundEnabled ? "#fff" : "#ccc"}
              />
            }
          />
          <SettingItem
            title="Haptic Feedback"
            subtitle="Vibrate on button presses"
            rightComponent={
              <Switch
                value={hapticFeedback}
                onValueChange={setHapticFeedback}
                trackColor={{ false: "#333", true: "#4CAF50" }}
                thumbColor={hapticFeedback ? "#fff" : "#ccc"}
              />
            }
          />
          <SettingItem
            title="Dark Mode"
            subtitle="Use dark theme"
            rightComponent={
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: "#333", true: "#4CAF50" }}
                thumbColor={darkMode ? "#fff" : "#ccc"}
              />
            }
          />
        </SettingSection>

        <SettingSection title="Account">
          <SettingItem
            title="Profile"
            subtitle="Edit your profile information"
            onPress={handleAccount}
            showArrow
          />
          <SettingItem
            title="Privacy"
            subtitle="Manage your privacy settings"
            onPress={handlePrivacy}
            showArrow
          />
          <SettingItem
            title="Export Data"
            subtitle="Download your progress data"
            onPress={handleExportData}
            showArrow
          />
        </SettingSection>

        <SettingSection title="Progress">
          <SettingItem
            title="Reset Progress"
            subtitle="Clear all progress and start over"
            onPress={handleResetProgress}
            rightComponent={<Text style={styles.dangerText}>Reset</Text>}
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

        <View style={styles.footer}>
          <Text style={styles.footerText}>Wanderer v1.0.0</Text>
          <Text style={styles.footerSubtext}>
            Made with ♥ for daily mindfulness
          </Text>
        </View>
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "700",
    marginTop: 60,
    marginBottom: 30,
    textAlign: "center",
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
  dangerText: {
    fontSize: 14,
    color: "#FF6B6B",
    fontWeight: "500",
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
