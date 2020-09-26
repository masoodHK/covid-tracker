import React, { useContext } from 'react'
import { Select, MenuItem, Container } from "@material-ui/core"
import { GlobalContext } from '../context/GlobalContext'

export default function CountryPicker() {
    const { countries, countryID, updateDataByCountry, setData } = useContext(GlobalContext)

    async function updateData(countryID) {
        let data
        if (countryID !== "all") {
            data = await (await fetch(`https://covid19.mathdro.id/api/countries/${countryID}`)).json()
            console.log(data)
            updateDataByCountry(countryID, data)
        }
        else {
            data = await (await fetch("https://covid19.mathdro.id/api")).json()
            setData(data)
        }
    }

    function handleChange(event) {
        updateData(event.target.value)
    }

    return (
        <Container>
            <Select defaultValue={countryID} value={countryID} onChange={handleChange}>
                <MenuItem value="all">All Countries</MenuItem>
                {countries.map((country, index) => <MenuItem key={index} value={country.iso3}>{country.name}</MenuItem>)}
            </Select>
        </Container>
    )
}
