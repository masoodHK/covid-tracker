import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import Header from "./components/Header";

import "./styles.css";
import Section from "./components/Section";
import CountryPicker from "./components/CountryPicker";
import { Chart } from "./components/Chart";

export default function App() {
  const [data, setData] = useState({})
  const [dailyData, setDailyData] = useState([]);
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await fetch("https://covid19.mathdro.id/api")).json()
      const dailyData = await (await fetch("https://covid19.mathdro.id/api/daily")).json()
      const countries = await (await fetch("https://covid19.mathdro.id/api/countries")).json()
      setDailyData(dailyData)
      setData(data)
      setCountries(countries.countries)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Section data={{ heading: "Cases", value: data["confirmed"] ? data["confirmed"].value : 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Section data={{ heading: "Recovered", value: data["recovered"] ? data["recovered"].value : 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Section data={{ heading: "Deaths", value: data["deaths"] ? data["deaths"].value : 0 }} />
          </Grid>
        </Grid>
      </Container>
      <CountryPicker countries={countries}/>
      <Container>
        <Chart fetchedData={{
          deaths: dailyData.map(({ deaths }) => deaths.total),
          confirmed: dailyData.map(({ confirmed }) => confirmed.total),
        }} labels={dailyData.map(({ reportDate }) => reportDate)} />
      </Container>
    </div>
  );
}
