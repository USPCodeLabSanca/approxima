import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./theme";
import * as serviceWorker from "./serviceWorker";

//pages
import Pages from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Pages.Home} />
          <Route path="/entrar" component={Pages.Login} />
          <Route path="/cadastrar" component={Pages.Register} />
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
