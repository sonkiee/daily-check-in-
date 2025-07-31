// import { useCheckinStore } from "../stores/checkinStore";

// export const useTodayCheckin = (deviceId: string) => {
//   return useQuery({
//     queryKey: ["checkin", "today", deviceId],
//     queryFn: () => checkToday(deviceId),
//     onSuccess: (data) => {
//       useCheckinStore.getState().setCheckedIn(data.checkedIn);
//     },
//   });
// };
