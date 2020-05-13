import React from "react";
import { Route, Redirect } from "react-router-dom";

const RefreshRoute = ({ component: Component, isDataAvailable, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isDataAvailable ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/dashboard",
          }}
        />
      )
    }
  />
);

export default RefreshRoute;
