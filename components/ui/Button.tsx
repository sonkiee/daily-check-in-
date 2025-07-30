import React from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

type ButtonProps = PressableProps & {
  title: string;
  style?: ViewStyle | ViewStyle[];
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  title,
  loading = true,
  ...rest
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    // flex: 1,
    width: "90%",
    flexDirection: "row",
    gap: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.6,
  },
});

export default Button;
