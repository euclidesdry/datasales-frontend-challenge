import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Authentication from "./routes/Auth";
import Application from "./routes/App";

export default function AppRouter() {
  return (
    <Router>
      <div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/app" element={<Application />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </div>
    </Router>
  );
}