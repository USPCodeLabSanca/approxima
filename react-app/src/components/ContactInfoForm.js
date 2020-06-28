import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

/* 
  cidade de origem,
  cidade atual* (talvez dar opcao de pegar por gps), 
  idiomas* (maiszinho para adicionar),
  contato* (maiszinho para adicionar),
*/

export default function ContactInfoForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações de contato
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            id="originCity"
            label="Cidade de origem"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="currentCity"
            label="Cidade atual"
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
