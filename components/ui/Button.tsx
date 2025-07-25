import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

type ButtonProps = PressableProps & {
  title: string;
  style?: ViewStyle | ViewStyle[];
};

const Button: React.FC<ButtonProps> = ({ onPress, style, title, ...rest }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 99,
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Button;
