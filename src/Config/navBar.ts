import { IconProp } from "@fortawesome/fontawesome-svg-core";

import store from "Redux/store";

import Routes from "Config/routes";

import Language from "Constants/Language";

interface NavItemInterface {
  name: string;
  path: string;
  icon: IconProp;
  employer: boolean;
  freelancer: boolean;
}

const GlobalState = store.getState().state;
const routes = Routes.getNamePath();
const lang = Language[GlobalState.language].nav;

const NavItems: Array<NavItemInterface> = [
  {
    name: lang.jobs,
    path: routes.home,
    icon: "suitcase",
    employer: false,
    freelancer: true
  },
  {
    name: lang.freelancers,
    path: routes.home,
    icon: "users",
    employer: true,
    freelancer: false
  },
  {
    name: lang.analytics,
    path: routes.analytics,
    icon: "chart-bar",
    employer: true,
    freelancer: true
  },
  {
    name: lang.messages,
    path: routes.messages,
    icon: "comment",
    employer: true,
    freelancer: true
  },
  {
    name: lang.profile,
    path: routes.profile,
    icon: "user",
    employer: true,
    freelancer: true
  }
];

export default NavItems;
