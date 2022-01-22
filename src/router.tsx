import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Authentication from "./routes/Auth";
import Application from "./routes/App";
import E404 from "./routes/Errors/E404";
import Private from "./routes/Private";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/auth" element={<Authentication />} />
          <Route
            path="/app"
            element={
              <Private>
                <Application />
              </Private>
            }
          />
          <Route path="*" element={<E404 />} />
        </Routes>
      </div>
    </Router>
  );
}
