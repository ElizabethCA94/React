import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import Header from '../../components/Header';

const RegisterUI = () => {
    return (
        <div class="ui form">
          <Header></Header>
          <h1>Formulario de Registro</h1>
          <Form>
            <Form.Field>
              <div class="ui form success">
                <div class="field">
                <label>E-mail</label>
                <input type="email" placeholder="joe@schmoe.com"/>
                </div>
              </div>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="****"/>
            </Form.Field>
            <Button type="ui submit button">Submit</Button>
          </Form>
        </div>
      ); 
};

export default RegisterUI;