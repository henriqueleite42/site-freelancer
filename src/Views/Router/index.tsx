import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthOnlyRoutes from "./AuthOnlyRoutes";
import loadRoute from "./loadRoute";

import Loader from "Components/Loader";

import { useGlobalState } from "Redux/state";

import Routes from "Config/routes";

const Router: React.FC = () => {
  const GlobalState = useGlobalState();

  return (
    <Suspense fallback={<Loader mode="full" />}>
      <div data-theme={GlobalState.theme}>
        <BrowserRouter>
          <Switch>
            {Routes.getNonAuth().map((route, index) => (
              <Route
                exact
                key={index}
                path={route.path}
                component={loadRoute(route)}
              />
            ))}
            <AuthOnlyRoutes>
              {Routes.getAuth().map((route, index) => (
                <Route
                  exact
                  key={index}
                  path={route.path}
                  component={loadRoute(route)}
                />
              ))}
            </AuthOnlyRoutes>
          </Switch>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default Router;
