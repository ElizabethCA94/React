import React from 'react';
//import {Link} from 'react-router-dom';
//import {register} from '../../context/actions/auth/Register';
import RegisterUI from '../../layout/Register';
import Header from '../../components/Header';


const RegisterContainer = () => {

    return (
      <div>
        <Header></Header>
        <RegisterUI></RegisterUI>
      </div>
      ); 
};

export default RegisterContainer;