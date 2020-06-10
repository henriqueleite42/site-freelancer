import RoutesLanguage from "Constants/Language/Routes";

export interface RouteInterface {
  name: keyof typeof RoutesLanguage.EN;
  path: string;
  component: string;
  blocked?: boolean;
  navBar?: boolean;
  authOnly?: boolean;
}

interface RouteConfigInterface {
  name: keyof typeof RoutesLanguage.EN;
  component: string;
  blocked?: boolean;
  authOnly?: boolean;
  navBar?: boolean;
}

const ROUTES: Array<RouteConfigInterface> = [
  {
    name: "home",
    component: "Home",
    navBar: true
  },
  {
    name: "analytics",
    component: "Analytics",
    navBar: true
  },
  {
    name: "messages",
    component: "Messages",
    navBar: true
  },
  {
    name: "profile",
    component: "Profile",
    navBar: true
  },
  {
    name: "relax",
    component: "Relax"
  }
];

class Routes {
  private Language: typeof RoutesLanguage.EN;

  constructor(lang: keyof typeof RoutesLanguage) {
    this.Language = RoutesLanguage[lang];
  }

  public getNamePath = () => {
    const NamePath: Partial<
      { [T in keyof typeof RoutesLanguage.EN]: string }
    > = {};

    ROUTES.forEach(route => {
      NamePath[route.name] = `/${this.Language[route.name]}`;
    });

    return NamePath as { [T in keyof typeof RoutesLanguage.EN]: string };
  };

  public getNavBar = () => {
    const NavBarRoutes: Array<RouteInterface> = [];

    ROUTES.forEach(route => {
      if (route.navBar) {
        NavBarRoutes.push({
          ...route,
          path: `/${this.Language[route.name]}`
        });
      }
    });

    return NavBarRoutes;
  };

  public getNonAuth = () => {
    const NonAuthRoutes: Array<RouteInterface> = [];

    ROUTES.forEach(route => {
      if (!route.authOnly) {
        NonAuthRoutes.push({
          ...route,
          path: `/${this.Language[route.name]}`
        });
      }
    });

    return NonAuthRoutes;
  };

  public getAuth = () => {
    const AuthRoutes: Array<RouteInterface> = [];

    ROUTES.forEach(route => {
      if (route.authOnly) {
        AuthRoutes.push({
          ...route,
          path: `/${this.Language[route.name]}`
        });
      }
    });

    return AuthRoutes;
  };

  public getAuthNonAuth = () => {
    const AuthRoutes: Array<RouteInterface> = [];
    const NonAuthRoutes: Array<RouteInterface> = [];

    ROUTES.forEach(route => {
      if (route.authOnly) {
        AuthRoutes.push({
          ...route,
          path: `/${this.Language[route.name]}`
        });
      } else {
        NonAuthRoutes.push({
          ...route,
          path: `/${this.Language[route.name]}`
        });
      }
    });

    return [AuthRoutes, NonAuthRoutes];
  };
}

export default Routes;
