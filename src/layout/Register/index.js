import React from 'react';

const RegisterUI = () => {
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
};

export default RegisterUI;