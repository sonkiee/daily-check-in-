import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        presentation: "formSheet",
      }}
    >
      <Stack.Screen
        name="sign-up"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
