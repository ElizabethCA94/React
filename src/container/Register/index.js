import React from 'react';
import {Link} from 'react-router-dom';

const RegisterContainer = () => {
    return (
        <div>
          <h1>Registro</h1>
          <Link to="/login">Login Here</Link>
        </div>
      ); 
};

export default RegisterContainer;