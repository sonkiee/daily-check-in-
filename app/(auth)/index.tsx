import Wrapper from "@/components/ui/Wrapper";
import React from "react";
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
  return (
    <Wrapper>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({ ios: "padding", android: undefined })}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Choose a username</Text>
          <Text style={styles.subtitle}>
            This will be your unique ID – no spaces or special characters.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="e.g. joshua_dev"
            placeholderTextColor="#aaa"
          />

          <TouchableOpacity style={styles.button}>
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
    // flex: 1,
    // backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },
  content: {
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#111",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
  },
  input: {
    height: 48,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#000",
  },
  button: {
    marginTop: 12,
    backgroundColor: "#111",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
