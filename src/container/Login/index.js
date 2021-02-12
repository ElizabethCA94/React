import React from "react";
import { Link } from "react-router-dom";
import LoginUI from "../../layout/Login";
import "./loginPage.css";

const LoginContainer = () => {
  return (
    <div class="lf-login-page">
      <LoginUI></LoginUI>
      <Link to="/auth/register">Register Here</Link>
    </div>
  );
};

export default LoginContainer;
