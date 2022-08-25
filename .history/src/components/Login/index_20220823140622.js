import React from 'react';
import login from '../../assets/images/logo-login.png';
import './Login.css';

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  return (
    <div className="login">
        <div className='logo-login'>
          <img src={login} alt="logo login"/>
        </div>
        <form className="login-form">
          <h2>LOGEATE</h2>
          <input type="text" placeholder="Usuario" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
        </form>
    </div>
  )
}

export default Login;
