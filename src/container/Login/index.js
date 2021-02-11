import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import LoginUI from '../../layout/Login';

const LoginContainer = () => {
    return (
        <div>
          <Header></Header>
          <LoginUI></LoginUI>
          <Link to="/auth/register">Register Here</Link>
        </div>
      ); 
};

export default LoginContainer;