import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
