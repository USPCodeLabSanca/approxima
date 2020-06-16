import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonMaterial from "@material-ui/core/Button";
import colors from "../colors";

//TODO change font color to white

const useStyles = makeStyles({
  root: {
    border: "5px",
    borderColor: colors.black,
    borderRadius: "10vh",
    height: "8vh",
    width: "30vh",
    padding: "0 10vh",
    margin: "2vh",
  },
});

export default function Button({ text, action }) {
  const classes = useStyles();

  return (
    <>
      <ButtonMaterial
        className={classes.root}
        variant="contained"
        color="secondary"
      >
        {text}
      </ButtonMaterial>
    </>
  );
}
