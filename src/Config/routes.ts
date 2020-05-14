export interface RouteInterface {
  name: string;
  path: string;
  component: string;
  blocked?: boolean;
  authOnly?: boolean;
  navBar?: boolean;
}

const ROUTES: Array<RouteInterface> = [
  {
    name: "home",
    path: "/",
    component: "Home",
    navBar: true
  },
  {
    name: "analytics",
    path: "/analytics",
    component: "Analytics",
    navBar: true
  },
  {
    name: "messages",
    path: "/messages",
    component: "Messages",
    navBar: true
  },
  {
    name: "profile",
    path: "/profile",
    component: "Profile",
    navBar: true
  },
  {
    name: "relax",
    path: "/relax",
    component: "Relax"
  }
];

class Routes {
  static getNamePath = () => {
    const NamePath: { [key: string]: string } = {};

    for (const route of ROUTES) {
      NamePath[route.name] = route.path;
    }

    return NamePath;
  };

  static getNonAuth = () => {
    const NonAuthRoutes: Array<RouteInterface> = [];

    for (const route of ROUTES) {
      if (!route.authOnly) NonAuthRoutes.push(route);
    }

    return NonAuthRoutes;
  };

  static getAuth = () => {
    const AuthRoutes: Array<RouteInterface> = [];

    for (const route of ROUTES) {
      if (route.authOnly) AuthRoutes.push(route);
    }

    return AuthRoutes;
  };
}

export default Routes;
