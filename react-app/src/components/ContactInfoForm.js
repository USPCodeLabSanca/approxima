import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

/* 
  cidade de origem,
  cidade atual* (talvez dar opcao de pegar por gps), 
  idiomas* (maiszinho para adicionar),
  contato* (maiszinho para adicionar),
*/

// got code from https://medium.com/@rkstrdee/dynamic-form-fields-using-react-with-hooks-b7d4d037042c

export default function ContactInfoForm() {

  const [languages, setLanguages] = useState([{language: ""}]);

  function handleChangeInputLanguage(i, event) {
    const values = [...languages];
    const { value } = event.target;
    values[i].language = value;
    setLanguages(values);
  }
  
  function handleAddInputLanguage() {
    const values = [...languages];
    values.push({
      language: "",
    });
    setLanguages(values);
  }
  
  function handleRemoveInputLanguage(i) {
    const values = [...languages];
    if (values.length === 1) return;
    values.splice(i, 1);
    setLanguages(values);
  }

  const [contacts, setContacts] = useState([{contact: ""}]);

  function handleChangeInputContact(i, event) {
    const values = [...contacts];
    const { value } = event.target;
    values[i].contact = value;
    setContacts(values);
  }
  
  function handleAddInputContact() {
    const values = [...contacts];
    values.push({
      contact: "",
    });
    setContacts(values);
  }
  
  function handleRemoveInputContact(i) {
    const values = [...contacts];
    if (values.length === 1) return;
    values.splice(i, 1);
    setContacts(values);
  }

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
        {languages.map((field, idx) => {
            return (
              <Grid item xs={12} md={6} key={idx}>
                <TextField
                  required
                  id={`language-${idx}`}
                  label="Idioma"
                  type="text"
                  value={field.language ? field.language : ""}
                  onChange={e => handleChangeInputLanguage(idx, e)}
                />
                <Button type="button" onClick={() => handleAddInputLanguage()}>
                  +
                </Button>
                <Button type="button" onClick={() => handleRemoveInputLanguage(idx)}>
                  -
                </Button>
              </Grid>
            );
          })}
          {contacts.map((field, idx) => {
            return (
              <Grid item xs={12} md={6} key={idx}>
                <TextField
                  required
                  id={`contact-${idx}`}
                  label="Contato"
                  type="text"
                  value={field.contact ? field.contact : ""}
                  onChange={e => handleChangeInputContact(idx, e)}
                />
                <Button type="button" onClick={() => handleAddInputContact()}>
                  +
                </Button>
                <Button type="button" onClick={() => handleRemoveInputContact(idx)}>
                  -
                </Button>
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
}
