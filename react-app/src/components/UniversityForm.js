import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

/*
  campus* -> 
  instituto* -> 
  nível* (graduação, mestrado, doutorado) -> 
  curso*, 
  ano de ingresso,
*/

export default function UniversityForm() {
  const [campus, setCampus] = React.useState("");

  const handleCampus = (event) => {
    setCampus(event.target.value);
  };

  const [institute, setInstitute] = React.useState("");

  const handleInstitute = (event) => {
    setInstitute(event.target.value);
  };

  const [nivel, setNivel] = React.useState("");

  const handleNivel = (event) => {
    setNivel(event.target.value);
  };

  const [course, setCourse] = React.useState("");

  const handleCourse = (event) => {
    setCourse(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Sobre sua universidade
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputLabel id="campusSelectLabel" required>
            Campus
          </InputLabel>
          <Select
            id="campusSelect"
            value={campus}
            onChange={handleCampus}
            fullWidth
          >
            <MenuItem value={"São Carlos"}>USP São Carlos</MenuItem>
            <MenuItem value={"Leste"}>USP Leste</MenuItem>
            <MenuItem value={"Cidade universitária"}>
              Cidade universitária
            </MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel id="instituteSelectLabel" required>
            Instituto
          </InputLabel>
          <Select
            id="instituteSelect"
            value={institute}
            onChange={handleInstitute}
            fullWidth
          >
            <MenuItem value={"ICMC"}>ICMC</MenuItem>
            <MenuItem value={"EESC"}>EESC</MenuItem>
            <MenuItem value={"IQSC"}>IQSC</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel id="nivelSelectLabel" required>
            Nível
          </InputLabel>
          <Select
            id="nivelSelect"
            value={nivel}
            onChange={handleNivel}
            fullWidth
          >
            <MenuItem value={"undergraduate"}>Graduação</MenuItem>
            <MenuItem value={"master"}>Mestrado</MenuItem>
            <MenuItem value={"doctorate"}>Doutorado</MenuItem>
            <MenuItem value={"posdoctorate"}>Pós doutorado</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel id="courseSelectLabel" required>
            Curso
          </InputLabel>
          <Select
            id="courseSelect"
            value={course}
            onChange={handleCourse}
            fullWidth
          >
            <MenuItem value={"BCC"}>Ciências de computação</MenuItem>
            <MenuItem value={"MatApl"}>Matemática aplicada</MenuItem>
            <MenuItem value={"Estat"}>Estatística</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="startYear"
            label="Ano de ingresso"
            type="number"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
