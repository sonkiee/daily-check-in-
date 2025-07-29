import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        presentation: "modal",
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
