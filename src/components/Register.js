import React, {Fragment} from 'react';
import {Form, Button} from 'semantic-ui-react';
const Register = () => {
  const [datos, setDatos] = useState  ({
    correo: '',
    contrasena: ''
  })

  const handleInputChange = (event) => {
    console.log(event.target.value)
  }


  return (
    <div class="ui form">
      <h1>Formulario de Registro</h1>
      <div class="fields">
        <div class="field">
          <div class="ui form success">
            <div class="field">
            <label>E-mail</label>
            <input type="email" placeholder="joe@schmoe.com"/>
            </div>
          </div>
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" onChange = {handleInputChange}/>
        </div>
        <div class="field">
          <div class="ui submit button">Submit</div>
        </div>
      </div>
    </div>
  ); 
}