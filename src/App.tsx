import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Router from './router';

import './App.css';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Router />
    </Fragment>
  );
}

export default App;
