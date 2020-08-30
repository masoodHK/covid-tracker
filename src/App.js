import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import Header from "./components/Header";

import "./styles.css";
import Section from "./components/Section";

export default function App() {
  const [data, setData] = useState({})

  useEffect(async () => {
    const data = await (await fetch("https://coronavirus-19-api.herokuapp.com/all")).json()
    setData(data)
  })
  return (
    <div className="App">
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Section data={{ heading: "Cases", value: data.cases ? data.cases : 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Section data={{ heading: "Recovered", value: data.recovered ? data.recovered: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Section data={{ heading: "Deaths", value: data.deaths ? data.deaths : 0 }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
