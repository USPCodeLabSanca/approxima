import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function UserInfoForm() {
  const classes = useStyles();
  // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Sobre você
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Nome"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              // value={selectedDate}
              // onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="dd/MM/yyyy"
              // value={selectedDate}
              // onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>

          <TextField
            id="bday"
            name="bday"
            label="Data de Nascimento"
            fullWidth
            autoComplete="given-bday"
            type="date"
          />
        </Grid> */}
        <Grid>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mini-bio"
            name="mini-bio"
            label="Biografia (resumo)"
            helperText="Conte um pouco sobre você em poucas palavras.
                Essa será sua primeira impressão para os outros usuários do app!"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="bio"
            name="bio"
            label="Biografia (completa)"
            helperText="Conte sobre você o quanto quiser, sem se importar com o limite de caracteres!
                Caso não deseje, é só deixar esse campo em branco (iremos usar a sua biografia resumida no lugar)."
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
