import React from "react";
import { Container } from "@material-ui/core";

import Button from "../components/Button";
import logo from "../logo.svg";

function Home() {
  return (
    <Container>
      <img src={logo} />
      <Button text="Login"></Button>
      <Button text="Cadastro"></Button>
    </Container>
  );
}

export default Home;
