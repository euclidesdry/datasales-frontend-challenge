import React from "react";
import { Box } from "@mui/material";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../_state";
import { State } from "../../_state/reducers";

import { DrinksTable } from "../../components/App/Table/DrinksTable";
import { Header } from "../../components/App/Header";

export default function App() {
  const dispatch = useDispatch();
  const { logoutUser } = bindActionCreators(actionCreators, dispatch);
  const user = useSelector((state: State) => state.users);

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
      <Header onLogout={() => logoutUser()} />
      <h1>Drinks Table by {user.username}</h1>

      <Box
        sx={{
          with: "80%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DrinksTable />
      </Box>
    </Box>
  );
}
