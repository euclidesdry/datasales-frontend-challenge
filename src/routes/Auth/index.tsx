/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { State } from "../../_state/reducers";
import { actionCreators } from "../../_state";

import { Header } from "../../components/App/Header";
import { LOGIN_USERS } from "../../services/App";

export default function Auth() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const { loginUser } = bindActionCreators(actionCreators, dispatch);
  const user = useSelector((state: State) => state.users);

  useEffect(() => {
    console.log(user);
  }, [user]);

  let navigate = useNavigate();

  const signIn = () => {
    const matchUser = LOGIN_USERS.find(
      ({ username: LUsername, password: LPassword }) => {
        return (
          LUsername.toLocaleLowerCase() === username && LPassword === password
        );
      }
    );

    console.log("--matchUser: ", matchUser);

    if (matchUser && matchUser.username) {
      alert(`Sucesso, você está Logado como: ${username}`);
      loginUser(username);
      navigate("/app");
    } else {
      alert(`Usuário ou senha inválidos!`);
    }
  };

  return (
    <Box
      sx={{
        with: "100vh",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
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
            <Button variant="contained" color="primary" onClick={signIn}>
              Fazer Login
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
