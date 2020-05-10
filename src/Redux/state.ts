import { useSelector } from "react-redux";

import AppState, { State } from "Interfaces/AppState";

type Actions =
  | { type: "state/THEME"; theme: "dark" | "light" }
  | { type: "state/LANGUAGE"; language: "EN" | "BR" }
  | { type: "state/MODE"; mode?: "freelancer" | "employer" };

const INITIAL: State = {
  theme: "light",
  language: "EN",
  mode: "freelancer"
};

export const stateReducer = (state = INITIAL, action: Actions): State => {
  switch (action.type) {
    case "state/THEME":
      return { ...state, theme: action.theme };
    case "state/LANGUAGE":
      return { ...state, language: action.language };
    case "state/MODE":
      if (action.mode) {
        return { ...state, mode: action.mode };
      }

      return {
        ...state,
        mode: state.mode === "freelancer" ? "employer" : "freelancer"
      };
    default:
      return state;
  }
};

export const useGlobalState = () =>
  useSelector<AppState, State>(store => store.state);
