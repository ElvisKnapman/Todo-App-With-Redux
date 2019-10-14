import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({
  userToken,
  redirect,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (userToken) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`${redirect}`} />;
        }
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    userToken: state.userInfo.userAccount.token
  };
};

export default connect(
  mapStateToProps,
  {}
)(ProtectedRoute);
