import React, { useContext } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { GlobalContext } from '../context/GlobalContext'
import Section from './Section'

export default function CasesInfo() {
    const { data } = useContext(GlobalContext)
    const date = new Date(data.lastUpdate).toDateString({
        year: "numeric"
    })
    return (
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
            <Typography>Updated on: {date}</Typography>
        </Container>
    )
}
