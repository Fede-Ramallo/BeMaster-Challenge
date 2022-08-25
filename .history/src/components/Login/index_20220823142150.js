import React, { useState } from "react";
import login from "../../assets/images/logo-login.png";
import "./Login.css";

import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";

const Login = () => {
  const [nombre, guardarNombre] = useState("");
  const [email, guardarEmail] = useState("");
  const [password, guardarPassword] = useState("");
  return (
    <div className="login">
      <div className="logo-login">
        <img src={login} alt="logo login" />
      </div>
      <form className="login-form">
        <h2>LOGEATE</h2>
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
          onChange={(e) => guardarEmail(e.target.value)}
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
