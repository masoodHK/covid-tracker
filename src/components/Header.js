import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default () => (
  <header>
    <AppBar position="static">
      <Toolbar>
        <Typography>COVID-19 Tracker</Typography>
      </Toolbar>
    </AppBar>
  </header>
);
