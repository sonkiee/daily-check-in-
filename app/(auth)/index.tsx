import Button from "@/components/ui/Button";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface SignupModalProps {
  visible: boolean;
  onClose: () => void;
  onSignupSuccess: (userData: { username: string; email: string }) => void;
  earnedPoints: number;
}

const SignupModal: React.FC<SignupModalProps> = ({
  visible,
  onClose,
  onSignupSuccess,
  earnedPoints,
}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!username.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Call success callback with user data
      onSignupSuccess({ username: username.trim(), email: email.trim() });

      // Reset form
      resetForm();
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    Alert.alert("Coming Soon", `${provider} login will be available soon!`);
  };

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setIsLogin(false);
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoid}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.modalContainer}>
              {/* Header */}
              <View style={styles.header}>
                <Text style={styles.title}>
                  {isLogin ? "Welcome Back!" : "Save Your Progress"}
                </Text>
                <Text style={styles.subtitle}>
                  {isLogin
                    ? "Sign in to continue your streak"
                    : `You're about to earn ${earnedPoints} points! Create an account to save your progress.`}
                </Text>
              </View>

              {/* Form */}
              <View style={styles.form}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Username</Text>
                  <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Enter your username"
                    placeholderTextColor="#666"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    placeholderTextColor="#666"
                    secureTextEntry
                    autoCapitalize="none"
                  />
                </View>

                <View style={styles.buttonContainer}>
                  <Button
                    title={
                      loading
                        ? "Please wait..."
                        : isLogin
                        ? "Sign In"
                        : "Create Account & Check In"
                    }
                    onPress={handleSubmit}
                    disabled={loading}
                  />
                </View>

                {/* Divider */}
                <View style={styles.divider}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>or</Text>
                  <View style={styles.dividerLine} />
                </View>

                {/* Social Login */}
                <View style={styles.socialContainer}>
                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => handleSocialLogin("Google")}
                  >
                    <Text style={styles.socialButtonText}>
                      Continue with Google
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => handleSocialLogin("Apple")}
                  >
                    <Text style={styles.socialButtonText}>
                      Continue with Apple
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Toggle Login/Signup */}
                <View style={styles.toggleContainer}>
                  <Text style={styles.toggleText}>
                    {isLogin
                      ? "Don't have an account?"
                      : "Already have an account?"}
                  </Text>
                  <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                    <Text style={styles.toggleButton}>
                      {isLogin ? "Sign Up" : "Sign In"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Close Button */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleClose}
              >
                <Text style={styles.closeButtonText}>Maybe Later</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "flex-end",
  },
  keyboardAvoid: {
    flex: 1,
    justifyContent: "flex-end",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#1a1a1a",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
    maxHeight: "90%",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#bbb",
    textAlign: "center",
    lineHeight: 22,
  },
  form: {
    width: "100%",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "#ddd",
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#fff",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  buttonContainer: {
    marginTop: 8,
    marginBottom: 24,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  dividerText: {
    color: "#666",
    paddingHorizontal: 16,
    fontSize: 14,
  },
  socialContainer: {
    gap: 12,
    marginBottom: 24,
  },
  socialButton: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  toggleText: {
    color: "#888",
    fontSize: 14,
  },
  toggleButton: {
    color: "#4A9EFF",
    fontSize: 14,
    fontWeight: "600",
  },
  closeButton: {
    alignItems: "center",
    marginTop: 16,
  },
  closeButtonText: {
    color: "#666",
    fontSize: 16,
  },
});

export default SignupModal;
