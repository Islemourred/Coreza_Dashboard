import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Route protection disabled - allow access to all routes
  return <Outlet />;
};

export default PrivateRoute;
