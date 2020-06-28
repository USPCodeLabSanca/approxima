import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// Custom
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <>
      <RouterLink to="/">
        <IconButton color="secondary" aria-label="back_home" component="span">
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </RouterLink>
      <LoginForm></LoginForm>
    </>
  );
}

export default Login;
