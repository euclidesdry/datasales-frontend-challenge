import React from "react";
import { Box } from "@mui/material";

import { DrinkList } from "../../components/App/Lists/DrinkList";
import { DrinksTable } from "../../components/App/Table/DrinksTable";
import { Header } from "../../components/App/Header";

export default function App() {
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
      <h1>Drinks Table</h1>

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
