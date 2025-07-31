import Wrapper from "@/components/ui/Wrapper";
import signUp from "@/services/sign-up";
import { useUserStore } from "@/store/user";
import { genDeviceId } from "@/utils/device-id";
import { cleanUsername, isValidUsername } from "@/utils/username";
import * as Clipboard from "expo-clipboard";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setIsLoading] = useState(false);

  const { pushToken, setAccessToken } = useUserStore();
  const setUser = useUserStore.getState().setUser;

  useEffect(() => {
    (async () => {
      const { id } = await genDeviceId();
      setDeviceId(id);
    })();
  }, []);

  const validateUsername = (text: string) => {
    const cleaned = cleanUsername(text);
    setUsername(cleaned);

    if (!isValidUsername(cleaned)) {
      if (cleaned.length < 3) {
        setErrorMessage("Username must be at least 3 characters");
      } else if (cleaned.length > 20) {
        setErrorMessage("Username must be 20 characters or less");
      } else {
        setErrorMessage("Only letters, numbers, _ or - allowed");
      }
      setIsValid(false);
    } else {
      setErrorMessage("");
      setIsValid(true);
    }
  };

  const handleContinue = async () => {
    if (username.trim() === "") {
      return Alert.alert("Error", "Username is required");
    }

    if (!deviceId) {
      return Alert.alert("Error", "Device ID not available");
    }

    if (!pushToken) {
      Alert.alert(
        "Allow Notifications?",
        "We’d like to send you important updates, reminders, and alerts.",
        [
          {
            text: "Don't Allow",
            style: "cancel",
            onPress: () => console.log("User denied notification permission"),
          },
          {
            text: "Allow",
            onPress: async () => {},
          },
        ],
        {
          cancelable: false, // Alert must be explicitly dismissed
          onDismiss: () => {
            console.log("Notification permission alert dismissed");
          },
        }
      );
      return;
    }

    setIsLoading(true);

    try {
      const response = await signUp({ username, deviceId, pushToken });

      if (response.success) {
        const userData = response.data.user;
        const accessToken = response.data.token.accessToken;

        setUser({
          id: userData.id,
          username: userData.username,
          points: userData.totalPoints,
          deviceId: userData.deviceId,
          streak: userData.currentStreak,
        });

        setAccessToken(accessToken);

        console.log("Zustand user set:", useUserStore.getState().user);
      }
    } catch (error: any) {
      console.error("Sign-up error", error);
      Alert.alert("Sign-up failed", error?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const canContinue = username.length >= 3 && isValid;

  return (
    <Wrapper>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: "padding", android: "height" })}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 20 })}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Choose a username</Text>
          <Text style={styles.subtitle}>
            This will be your unique ID – use letters, numbers, hyphen or
            underscore.
          </Text>

          <View>
            <TextInput
              style={[
                styles.input,
                !isValid && username.length > 0 && styles.inputError,
              ]}
              placeholder="e.g. joshua-dev"
              placeholderTextColor="#888"
              value={username}
              onChangeText={validateUsername}
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={20}
              returnKeyType="done"
              onSubmitEditing={handleContinue}
            />
            {errorMessage ? (
              <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null}
          </View>

          <TouchableOpacity
            onPress={async () => {
              if (deviceId) {
                await Clipboard.setStringAsync(deviceId);
              }
            }}
          >
            <Text style={styles.deviceId}>Device ID: {deviceId || "N/A"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              (!canContinue || loading) && styles.buttonDisabled,
            ]}
            onPress={handleContinue}
            disabled={!canContinue || loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Continue</Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  content: {
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    fontSize: 15,
    color: "#ccc",
  },
  input: {
    height: 48,
    borderColor: "#1a1a1a",
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: "#1a1a1a",
    color: "#fff",
  },
  inputError: {
    borderColor: "#ff4444",
  },
  errorText: {
    color: "#ff4444",
    fontSize: 14,
    marginTop: 2,
    marginLeft: 4,
  },
  deviceId: {
    fontSize: 14,
    color: "#ccc",
    fontFamily: "monospace",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#111",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#333",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
