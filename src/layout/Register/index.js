import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './index.css';


const RegisterUI = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  
  const onSubmit = async () => {
    await fetch('http://localhost:4000/dev/registerUser', {
      method: 'post',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => data)
      .catch(e => console.log(e))

  }

  return (
    <div class="lf-register-form">
      <h1>Registrarse</h1>
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <div class="ui form success">
              <div class="field">
                <label>E-mail</label>
                <input value={email} onChange={handleEmailChange} type="email" placeholder="joe@schmoe.com" />
              </div>
            </div>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input onChange={handlePasswordChange} value={password} type="password" placeholder="****" />
          </Form.Field>
          <Button type="ui submit button">Submit</Button>
        </Form>
    </div>
  );
};

export default RegisterUI;