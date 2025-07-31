import { apiClient } from "@/libs/api";

const doCheckin = async () => {
  try {
    const response = await apiClient.post("/checkins");
    console.log("Check-in successful:", response);
    return { success: true, response: response.data };
  } catch (error: any) {
    console.error("Check-in failed:", error);
    throw new Error(error?.message || "Unknown error during Check-in");
  }
};

export default doCheckin;
