import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { Card, MobileStepper, Button, Dialog, AppBar } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

// Custom
import EmailForm from "./EmailForm";
import UserInfoForm from "./UserInfoForm";
import UniversityForm from "./UniversityForm";
import ContactInfoForm from "./ContactInfoForm";
import CategorySelectionForm from "./CategorySelectionForm";

const useStyles = makeStyles((theme) => ({
  card: {
    // margin: theme.spacing(2),
    // padding: theme.spacing(2),
    // [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    //   marginTop: theme.spacing(6),
    //   marginBottom: theme.spacing(6),
    //   padding: theme.spacing(3),
    // },
  },
  stepper: {
    // padding: theme.spacing(3, 0, 5),
  },
}));

export default function RegisterForm() {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const theme = useTheme();

  const steps = [
    "Primeiras infos",
    "Sobre você",
    "Sobre sua faculdade",
    "Contato",
    "Seus interesses",
  ];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <EmailForm />;
      case 1:
        return <UserInfoForm />;
      case 2:
        return <UniversityForm />;
      case 3:
        return <ContactInfoForm />;
      case 4:
        return <CategorySelectionForm />;
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <Card className={classes.card}>
      {activeStep === steps.length ? (
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Cadastro concluído" />
            <h1>Muito obrigado por se registrar!</h1>
            <p>
              Para começar a usar o app, é necessário confirmar seu e-mail.
              [acessar meu email]
            </p>
          </Dialog>
        </>
      ) : (
        <>
          {getStepContent(activeStep)}

          <MobileStepper
            variant="progress"
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
                Avançar
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
                Voltar
              </Button>
            }
          />
        </>
      )}
    </Card>
  );
}
