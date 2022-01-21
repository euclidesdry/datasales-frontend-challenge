// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Router from "./router";

import "./App.css";

function App() {
  return (
    <div data-testid="datasales-app">
      <CssBaseline />
      <Router />
    </div>
  );
}

export default App;
