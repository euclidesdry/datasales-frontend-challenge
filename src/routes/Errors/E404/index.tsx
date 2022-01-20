import React from 'react';

import { Box } from '@mui/material';

export default function E404() {
  return (
    <Box sx={{
      with: '100vh',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 >Error 404</h1>
    </Box>
  )
}
