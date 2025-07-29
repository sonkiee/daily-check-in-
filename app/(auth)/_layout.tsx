import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        presentation: "formSheet", // clean, lean, iOS native feel
        animation: "slide_from_bottom", // optional: nice on Android
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Auth",
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
