import { useSelector } from "react-redux";

import AppState from "Interfaces/AppState";
import { User } from "Interfaces/User";

import TempUser from "Temp/user";

type Actions = { type: "user/GET" };

// const INITIAL: User = {
//   id: "",
//   firstName: "",
//   middleName: "",
//   lastName: "",
//   headline: "",
//   about: "",
//   lvl: 0,
//   xp: 0
// };

const INITIAL = TempUser;

export const userReducer = (state = INITIAL, action: Actions): User => {
  switch (action.type) {
    case "user/GET":
      const user = TempUser;

      return user;
    default:
      return state;
  }
};

export const useUserState = () =>
  useSelector<AppState, User>(store => store.user);
