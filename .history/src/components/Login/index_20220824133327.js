import React, { useState } from "react";
import login from "../../assets/images/logo-login.jpg";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import validator from "validator";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { pink } from "@mui/material/colors";

const Login = () => {
  const [nombre, guardarNombre] = useState("");
  const [email, guardarEmail] = useState({ error: false, value: ""});
  const [password, guardarPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const navigate = useNavigate();

  const handleEmailValidate = (e) => {
    const value = e.target.value.trim().toLowerCase();

    const isValidEmail = re.test(value);

    guardarEmail({
      value,
      error: !isValidEmail
    });
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (error !== "") {
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      alert(error);
    }
  };

  return (
    <div className="login">
      <div className="logo-login">
        <img src={login} alt="logo login" />
      </div>
      <form className="login-form" onSubmit={onSubmitHandler}>
        <div className="login-title">
          <Avatar sx={{ bgcolor: pink[500] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Logeate
          </Typography>
        </div>
        {/* Inputs */}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="nombre"
          label="Nombre"
          name="nombre"
          autoComplete="nombre"
          autoFocus
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleEmailValidate}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => guardarPassword(e.target.value)}
        />
        {/* Button Submit */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="logeate"
        >
          Logeate
        </Button>
      </form>
    </div>
  );
};

export default Login;
