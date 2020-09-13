import React from 'react'
import { Container } from '@material-ui/core'
import { Line } from 'react-chartjs-2';

export const Chart = ({ fetchedData, labels }) => {
    
    const state = {
        labels: labels,
        datasets: [
            {
                label: "Deaths",
                data: fetchedData.deaths, 
                borderColor: "#Be375f",
                backgroundColor: "rgba(190, 55, 95, 0.5)"
            }, {
                label: "Confirmed",
                data: fetchedData.confirmed, 
                borderColor: "#f5eb6d",
                backgroundColor: "rgba(245, 235, 109, 0.5)"
            }
        ]
    }
    return (
        <Container>
            <Line data={state} />
        </Container>
    );
}