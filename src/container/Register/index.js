import React, {useEffect} from 'react';
//import {Link} from 'react-router-dom';
//import {register} from '../../context/actions/auth/Register';
import RegisterUI from '../../layout/Register';

const RegisterContainer = () => {
    /*useEffect(() =>
      {register();},
    );*/

    return (
      <div>
        <RegisterUI></RegisterUI>
      </div>
      ); 
};

export default RegisterContainer;