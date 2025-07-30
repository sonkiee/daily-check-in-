import Wrapper from "@/components/ui/Wrapper";
import { genDeviceId } from "@/utils/device-id";
import * as Clipboard from "expo-clipboard";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
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

  useEffect(() => {
    (async () => {
      const { id } = await genDeviceId();
      setDeviceId(id);
    })();
  }, []);

  const handleContinue = () => {
    // Add validation logic here if needed
    if (username.trim() !== "") {
      router.dismiss();
    }
  };

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

          <TextInput
            style={styles.input}
            placeholder="e.g. joshua_dev"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
          />

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
              username.trim() === "" && styles.buttonDisabled,
            ]}
            onPress={handleContinue}
            disabled={username.trim() === ""}
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
});
