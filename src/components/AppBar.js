import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

export default function TodoAppBar() {
  return (
    <AppBar position="static" color="primary" padding={6}>
      <Toolbar>
        <Typography variant="h6">TODO APP</Typography>
      </Toolbar>
    </AppBar>
  );
}
