import React from "react";
import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ user, element: Element, path, ...rest }) {
  return (
    <Route
      {...rest}
      path={path}
      element={user ? <Element /> : <Navigate to="/login" />}
    />
  );
}

export default PrivateRoute;
