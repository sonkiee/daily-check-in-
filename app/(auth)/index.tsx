import React from "react";
import { StyleSheet, Text } from "react-native";

const SignUpScreen = () => {
  return <Text> jjjj</Text>;
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
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
