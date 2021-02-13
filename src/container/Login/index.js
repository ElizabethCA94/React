import React, { useContext, setState} from "react";
import { Label } from "semantic-ui-react";
import LoginUI from "../../layout/Login";
import ProfileUI from "../../layout/Profile";
import "./index.css";
import Context from "../../store/context";

const LoginContainer = () => {
  const { state } = useContext(Context);
  return (
    <div class="lf-login-page">
      {!state.secretId && (
        <LoginUI></LoginUI>
      )}
      {state.secretId && (
        <ProfileUI></ProfileUI>
      )}
    </div>
  );
};

export default LoginContainer;
