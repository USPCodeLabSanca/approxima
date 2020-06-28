import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./theme";
import * as serviceWorker from "./serviceWorker";

//pages
import Pages from "./pages";

// TIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR
import EmailForm from "./components/EmailForm";
import UserInfoForm from "./components/UserInfoForm";
import UniversityForm from "./components/UniversityForm";
import ContactInfoForm from "./components/ContactInfoForm";
import CategorySelectionForm from "./components/CategorySelectionForm";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Pages.Home} />
          <Route path="/login" component={Pages.Login} />
          <Route path="/cadastro" component={Pages.Register} />
          {/* GAMBIARRA */}
          <Route path="/1" component={EmailForm} />
          <Route path="/2" component={UserInfoForm} />
          <Route path="/3" component={UniversityForm} />
          <Route path="/4" component={ContactInfoForm} />
          <Route path="/5" component={CategorySelectionForm} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
