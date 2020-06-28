import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

/*
  nome*,
  email*,
  senha*,
  bio (resumo) [até 140 caracteres]*,
  bio [checkbox: usar a mesma que a versao de resumo] (default será manter a mesma),
  idade,
  upload de foto,
*/

export default function UserInfoForm() {
  return (
    <React.Fragment>
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
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            type="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Senha"
            fullWidth
            type="password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password-conf"
            name="password-conf"
            label="Confirme a senha"
            fullWidth
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="mini-bio"
            name="mini-bio"
            label="Biografia (resumo)"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="bio"
            name="bio"
            label="Biografia"
            helperText="Se este campo for deixado em branco, utilizaremos o resumo da sua bio como sua bio completa (isso pode ser mudado depois nas configurações)."
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
