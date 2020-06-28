import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// custom
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <>
      <RouterLink to="/">
        <IconButton color="secondary" aria-label="back_home" component="span">
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </RouterLink>
      <RegisterForm></RegisterForm>
    </>
  );
}

export default Register;
