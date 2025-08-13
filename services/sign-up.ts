import { apiClient } from "@/libs/api";

interface SignUpProps {
  username: string;
  deviceId: string;
  pushToken?: string | null;
}

const signUp = async ({
  username,
  deviceId,
  pushToken,
}: SignUpProps): Promise<{ success: boolean; data: any }> => {
  const payload = { username, deviceId, pushToken };

  const response = await apiClient.post("/auth/signup", payload);
  console.log("Sign up success:", response.data);

  return {
    success: true,
    data: response.data,
  };
  // } catch (error: any) {
  //   console.error("Sign up failed:", error);
  //   throw new Error(error?.message || "Unknown error during sign-up");
  // }
};

export default signUp;
