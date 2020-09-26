import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default () => (
  <header className="navbar">
    <AppBar position="static" color="secondary" >
      <Toolbar>
        <Typography property="bold">COVID-19 Tracker</Typography>
      </Toolbar>
    </AppBar>
  </header>
);
