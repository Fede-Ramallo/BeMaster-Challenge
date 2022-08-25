import React from 'react';
import login from '../../assets/images/logo-login.png';
import './Login.css';

const Login = () => {
  return (
    <div>
        <div className=''>
          <img src={login} alt="logo login"/>
        </div>
        <form>
          <input></input>
        </form>
    </div>
  )
}

export default Login;
