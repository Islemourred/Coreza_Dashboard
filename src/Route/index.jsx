import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { auth0 } from "../Config/Config";
import { Auth0Provider } from "@auth0/auth0-react";
import { configureFakeBackend } from "../Services/fack.backend";
import Callback from "../Auth/Callback";
import Loader from "../Layout/Loader";
import { authRoutes } from "./AuthRoutes";
import LayoutRoutes from "../Route/LayoutRoutes";
import Signin from "../Auth/Signin";
import PrivateRoute from "./PrivateRoute";

// setup fake backend
configureFakeBackend();
const Routers = () => {
  // Authentication checks disabled for direct dashboard access
  const defaultDashboard = `${process.env.PUBLIC_URL}/dashboard/crm-admin`;

  return (
    <Auth0Provider
      domain={auth0.domain}
      clientId={auth0.clientId}
      redirectUri={auth0.redirectUri}
    >
      <BrowserRouter basename={"/"}>
        <>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path={"/"} element={<PrivateRoute />}>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}`}
                  element={<Navigate to={defaultDashboard} />}
                />
                <Route
                  exact
                  path={`/`}
                  element={<Navigate to={defaultDashboard} />}
                />
                <Route path={`/*`} element={<LayoutRoutes />} />
              </Route>
              <Route
                path={`${process.env.PUBLIC_URL}/callback`}
                render={() => <Callback />}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/login`}
                element={<Signin />}
              />
              {authRoutes.map(({ path, Components }, i) => (
                <Route path={path} element={Components} key={i} />
              ))}
            </Routes>
          </Suspense>
        </>
      </BrowserRouter>
    </Auth0Provider>
  );
};

export default Routers;
