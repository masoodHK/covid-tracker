import React, { useEffect, useContext } from "react";
import { Container } from "@material-ui/core";
import Header from "./components/Header";

import "./styles.css";
import CountryPicker from "./components/CountryPicker";
import { Chart } from "./components/Chart";
import { GlobalContext } from "./context/GlobalContext";
import CasesInfo from "./components/CasesInfo";

export default function App() {
  const { setData, setDailyData, setCountries } = useContext(GlobalContext)

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Header />
      <CasesInfo />
      <CountryPicker />
      <Container>
        <Chart/>
      </Container>
    </div>
  );
}
