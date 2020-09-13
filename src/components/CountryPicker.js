import React from 'react'
import { Select, MenuItem, Container } from "@material-ui/core"

export default function CountryPicker({ countries }) {
    console.log(countries)
    return (
        <Container>
            <Select>
                {countries.map((country, index) => <MenuItem key={index} value={country.iso3}>{country.name}</MenuItem>)}
            </Select>
        </Container>
    )
}
