import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          presentation: "formSheet", // clean, lean, iOS native feel
          animation: "slide_from_bottom", // optional: nice on Android
          headerShown: false, // remove clutter
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
