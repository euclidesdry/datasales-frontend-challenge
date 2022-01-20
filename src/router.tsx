import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Authentication from "./routes/Auth";
import Application from "./routes/App";
import E404 from "./routes/Errors/E404";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/app" element={<Application />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </div>
    </Router>
  );
}