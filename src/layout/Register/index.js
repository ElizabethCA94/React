import React, { useState } from 'react';
import { Form, Button} from 'semantic-ui-react';
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
    const response = await fetch('http://localhost:4000/dev/registerUser', {
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
      .catch(e => {
        console.log(e.message)
      })

    if (!response.message) {
      console.log(response);
      alert('Usuario registrado existosamente')
    }
    else {
      console.log(response);
      alert('Usuario no registrado')
    }

  }

  return (
    <div class="ui form">
      <h1>Registrarse</h1>
      <div class="lf-register-form">
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
            <div class="ui form success">
              <div class="field">
                <label>Password</label>
                <input value={password} onChange={handlePasswordChange} type="password" placeholder="****" />
              </div>
            </div>
          </Form.Field>
          <Button type="ui submit button">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterUI;