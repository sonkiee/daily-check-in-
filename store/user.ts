type User = {
  id: string;
  token: string;
  points: string;
  deviceId: string;
  streak: string;
};

type UserState = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  refreshing: boolean;
  setUser: () => Promise<void>;
};
