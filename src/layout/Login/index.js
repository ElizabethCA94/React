import React, { useContext, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import "./index.css";
import Context from "../../store/context";

const LoginUI = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { state, actions } = useContext(Context);

  const onSubmit = async () => {
    const loginResponse = await fetch("http://localhost:4000/dev/loginUser", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((e) => console.log(e));

    if (loginResponse?.secretId) {
      actions({
        type: "setState",
        payload: { ...state, secretId: loginResponse.secretId, userId: loginResponse.id },
      })
    }
  };

  return (
    <div class="lf-register-form">
      <h1>Login</h1>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <div class="ui form success">
            <div class="field">
              <label>E-mail</label>
              <input
                value={email}
                onChange={handleEmailChange}
                type="email"
                placeholder="joe@schmoe.com"
              />
            </div>
          </div>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="****"
          />
        </Form.Field>
        <Button type="ui submit button">Submit</Button>
      </Form>
    </div>
  );
};

export default LoginUI;
