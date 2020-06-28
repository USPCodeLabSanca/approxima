import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// Custom
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <>
      <Link to="/">
        <IconButton color="secondary" aria-label="back_home" component="span">
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </Link>
      <LoginForm></LoginForm>
    </>
  );
}

export default Login;
