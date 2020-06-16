import React from "react";
import { Container } from "@material-ui/core";

import Button from "../components/Button";

function Login() {
  return (
    <Container>
      <header className="Home-header">
        <Button text="Login"></Button>
      </header>
    </Container>
  );
}

export default Login;
