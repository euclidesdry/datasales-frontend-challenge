import React from 'react';
import { Box } from '@mui/material';

import { DrinkList } from '../../components/App/Lists/DrinkList';

export default function App() {
  return (
    <Box sx={{
      with: '100vh',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1>Your touch on the app page</h1>
      <DrinkList />
    </Box>
  );
}
