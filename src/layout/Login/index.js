import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './index.css';

const LoginUI = () => {

  return (
    <div class="lf-register-form">
      <h1>Login</h1>
        <Form>
          <Form.Field>
            <div class="ui form success">
              <div class="field">
                <label>E-mail</label>
                <input type="email" placeholder="joe@schmoe.com" />
              </div>
            </div>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="****" />
          </Form.Field>
          <Button type="ui submit button">Submit</Button>
        </Form>
    </div>
  );
};

export default LoginUI;