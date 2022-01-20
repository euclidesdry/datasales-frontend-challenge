import React, { useState, useEffect } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  let navigate = useNavigate();

  const signIn = () => {
    alert(`Username: ${username} Password: ${password}`);

    navigate('/app');
  };

  return (
    <Box sx={{
      with: '100vh',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1>Authentication</h1>

      <div className="App">
          <div className="Login">
            <TextField
              variant="outlined"
              placeholder="Username"
              margin="normal"
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <TextField
              variant="outlined"
              placeholder="Password"
              margin="normal"
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className="Button">
              <Button
                variant="contained"
                color="primary"
                onClick={signIn}
              >
                Log In
              </Button>
            </div>
          </div>
          {/* <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Okay
              </Button>
            </DialogActions>
          </Dialog> */}
      </div>
    </Box>
  );
}
