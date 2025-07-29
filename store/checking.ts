import { create } from "zustand";

type CheckinStore = {
  todayCheckedIn: boolean;
  loading: boolean;
  setCheckedIn: (status: boolean) => void;
  setLoading: (status: boolean) => void;
};

export const useCheckinStore = create<CheckinStore>((set) => ({
  todayCheckedIn: false,
  loading: false,
  setCheckedIn: (status) => set({ todayCheckedIn: status }),
  setLoading: (status) => set({ loading: status }),
}));
