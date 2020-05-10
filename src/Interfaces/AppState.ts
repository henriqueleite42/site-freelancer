export interface State {
  theme: "dark" | "light";
  language: "EN" | "BR";
  mode: "freelancer" | "employer";
}

export interface User {
  id: string;
}

export default interface AppState {
  state: State;
  user: User;
}
