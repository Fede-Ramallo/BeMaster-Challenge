import React from 'react';
import login from '../../assets/images/logo-login.png';
import './Login.css';

import TextField from "@material-ui/core/TextField";

const Login = () => {
  return (
    <div className="login">
        <div className='logo-login'>
          <img src={login} alt="logo login"/>
        </div>
        <form className="login-form">
          <h2>LOGEATE</h2>
          <TextField 
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
        </form>
    </div>
  )
}

export default Login;
