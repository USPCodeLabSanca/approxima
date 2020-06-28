import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function CategorySelectionForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Primeiras infos
      </Typography>
      <Grid container spacing={3}>
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
      </Grid>
    </React.Fragment>
  );
}
