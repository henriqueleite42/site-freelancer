import { User } from "Interfaces/User";

export interface State {
  theme: "dark" | "light";
  language: "EN" | "BR";
  mode: "freelancer" | "employer";
}

export default interface AppState {
  state: State;
  user: User;
}
