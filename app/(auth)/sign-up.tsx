import Wrapper from "@/components/ui/Wrapper";
import signUp from "@/services/sign-up";
import { genDeviceId } from "@/utils/device-id";
import * as Clipboard from "expo-clipboard";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
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

  useEffect(() => {
    (async () => {
      const { id } = await genDeviceId();
      setDeviceId(id);
    })();
  }, []);

  const validateUsername = (text: string) => {
    const cleanText = text.replace(/[^a-zA-Z0-9_-]/g, "");

    const isValidFormat = /^[a-zA-Z0-9_]{3,20}$/.test(cleanText);

    if (text !== cleanText) {
      setErrorMessage("Only letters, numbers, and underscores allowed");
      setIsValid(false);
    } else if (text.length > 0 && !isValidFormat) {
      if (text.length < 3) {
        setErrorMessage("Username must be at least 3 characters");
      } else if (text.length > 20) {
        setErrorMessage("Username must be 20 characters or less");
      } else {
        setErrorMessage("Invalid username format");
      }
      setIsValid(false);
    } else {
      setErrorMessage("");
      setIsValid(true);
    }

    setUsername(cleanText);
  };

  const handleContinue = async () => {
    if (username.trim() === "") {
      return Alert.alert("Error", "Username is required");
    }

    if (!deviceId) {
      return Alert.alert("Error", "Device ID not available");
    }

    setIsLoading(true);

    try {
      const response = await signUp({ username, deviceId });

      if (response.success) {
        router.dismiss();
      }
    } catch (error: any) {
      console.error("Sign-up error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const canContinue = username.length >= 3 && isValid;

  return (
    <Wrapper>
      <KeyboardAvoidingView
        // behavior={Platform.select({ ios: "padding", android: undefined })}
        behavior={Platform.select({ ios: "padding", android: "height" })}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 20 })}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Choose a username</Text>
          <Text style={styles.subtitle}>
            This will be your unique ID – no spaces or special characters.
          </Text>

          <View>
            <TextInput
              style={[
                styles.input,
                !isValid && username.length > 0 && styles.inputError,
              ]}
              placeholder="e.g. joshua_dev"
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
            style={[styles.button, !canContinue && styles.buttonDisabled]}
            onPress={handleContinue}
            disabled={!canContinue}
          >
            <Text style={styles.buttonText}>Continue</Text>
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
    // borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: "#1a1a1a",
    color: "#fff",
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
  errorText: {
    color: "#ff4444",
    fontSize: 14,
    marginTop: 2,
    marginLeft: 4,
  },
  inputError: {
    borderColor: "#ff4444",
  },
});
