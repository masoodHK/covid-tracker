import React, { useContext } from 'react'
import { Container } from '@material-ui/core'
import { Line, Pie } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalContext';

export const Chart = () => {
    const { dailyData, data, countryID } = useContext(GlobalContext)
    const labels = dailyData.map(({ reportDate }) => reportDate)
    const chartData = {
        deaths: dailyData.map(({ deaths }) => deaths.total),
        confirmed: dailyData.map(({ confirmed }) => confirmed.total),
    }

    const countryState = {
        labels: ["Deaths", "Confirmed", "Recovered"],
        datasets: [{
            data: [
                data["deaths"] ? data["deaths"].value : 0, 
                data["confirmed"] ? data["confirmed"].value : 0, 
                data["recovered"] ? data["recovered"].value : 0
            ],
            backgroundColor: ["rgba(190, 55, 95, 0.5)", "rgba(245, 235, 109, 0.5)", "rgba(95, 35, 107, 0.5)"],
            borderColor: ["#Be375f", "#f5eb6d", "#5f236b"]
        }]
    }

    const state = {
        labels: labels,
        datasets: [
            {
                label: "Deaths",
                data: chartData.deaths,
                borderColor: "#Be375f",
                backgroundColor: "rgba(190, 55, 95, 0.5)"
            }, {
                label: "Confirmed",
                data: chartData.confirmed,
                borderColor: "#f5eb6d",
                backgroundColor: "rgba(245, 235, 109, 0.5)"
            }
        ]
    }
    return (
        <Container>
            {countryID === "all" ? <Line data={state} /> : <Pie data={countryState}/>}
        </Container>
    );
}