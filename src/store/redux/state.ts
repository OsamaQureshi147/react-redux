import { User } from "../../models/User";

declare global {
  interface RootState {
    user: UserState;
  }
  interface UserState {
    users: User[];
    loading: boolean;
  }
}
