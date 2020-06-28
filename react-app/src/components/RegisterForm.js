import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import {
  Card,
  MobileStepper,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

// Custom
import UserInfoForm from "./UserInfoForm";
import UniversityForm from "./UniversityForm";
import ContactInfoForm from "./ContactInfoForm";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
}));

/*
  nome*, 
  email*,
  senha*,
  bio (resumo) [até 140 caracteres]*,
  bio [checkbox: usar a mesma que a versao de resumo] (default será manter a mesma),
  upload de foto,
  idade, 

  campus* -> 
  instituto* -> 
  nível* (graduação, mestrado, doutorado) -> 
  curso*, 
  ano de ingresso,
  
  cidade de origem,
  cidade atual* (talvez dar opcao de pegar por gps), 
  idiomas* (maiszinho para adicionar),
  contato* (maiszinho para adicionar),

  categorias
*/

export default function RegisterForm() {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const theme = useTheme();

  const steps = ["Sobre você", "Sobre sua faculdade", "Contato"];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <UserInfoForm />;
      case 1:
        return <UniversityForm />;
      case 2:
        return <ContactInfoForm />;
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <Card className={classes.card}>
      {activeStep === steps.length ? (
        <>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Muito obrigado por se registrar!
          </Typography>
          <Divider variant="middle" />
          <Typography variant="subtitle1">
            Para começar a usar o app, é necessário confirmar seu e-mail.
            [acessar meu email]
          </Typography>
        </>
      ) : (
        <>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Cadastro
          </Typography>
          <Divider variant="middle" />
          {getStepContent(activeStep)}
          <MobileStepper
            variant="dots"
            steps={steps.length}
            position="static"
            activeStep={activeStep}
            className={classes.stepper}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                // disabled={activeStep === 2}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </>
      )}
    </Card>
  );
}
