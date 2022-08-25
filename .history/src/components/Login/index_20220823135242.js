import React from 'react';
import login from '../../assets/images/logo-login.png';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
        <div className='logo-login'>
          <img src={login} alt="logo login"/>
        </div>
        <form>
          <input type="text" placeholder="" />
        </form>
    </div>
  )
}

export default Login;
