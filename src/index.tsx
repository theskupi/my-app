import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import Contexts from "./domains/common/contexts/Contexts";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Contexts>
      <Router />
    </Contexts>
  </React.StrictMode>,
  document.getElementById("root")
);
