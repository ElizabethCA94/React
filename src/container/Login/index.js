import React from "react";
import { Route, Redirect } from 'react-router';
import LoginUI from "../../layout/Login";
import "./loginPage.css";

const LoginContainer = () => {
  return (
    <div class="lf-login-page">
      <LoginUI></LoginUI>
      location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do.

      <Redirect to="/somewhere/else"/>

    </div>
  );
};

export default LoginContainer;
