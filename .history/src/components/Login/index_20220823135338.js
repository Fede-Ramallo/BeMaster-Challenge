import React from 'react';
import login from '../../assets/images/logo-login.png';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
        <div className='logo-login'>
          <img src={login} alt="logo login"/>
        </div>
        <form className="login-form">
          <input type="text" placeholder="Usuario" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
        </form>
    </div>
  )
}

export default Login;
