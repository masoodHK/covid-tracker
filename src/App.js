import React from "react";
import { Container, Grid } from "@material-ui/core";
import Header from "./components/Header";

import "./styles.css";
import Section from "./components/Section";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Section data={{ heading: "test" }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Section data={{ heading: "test" }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Section data={{ heading: "test" }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}