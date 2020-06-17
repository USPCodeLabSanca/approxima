import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

import logo from "../logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={5}
      className={classes.root}
    >
      <img src={logo} alt="approxima logo" />
      <Grid item>
        <Button variant="contained" color="secondary" size="large">
          Login
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary" size="large">
          Cadastre-se
        </Button>
      </Grid>
    </Grid>
  );
}

export default Home;