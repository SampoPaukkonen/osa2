import React from 'react'
import Country from './Country'
import CountryInfo from './CountryInfo'

const Countries = ({countries, setCountry}) => {
    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }
    else if (countries.length > 1) {
        return countries.map(country => <Country key={country.name} country={country} setCountry={setCountry}/>)
    }
    else if (countries.length === 1) {
        return(
           <CountryInfo country={countries[0]} />
        )
    }
    else {
        return (
        <div></div>
        )
    }
}


export default Countries