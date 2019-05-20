import React from 'react'
import Languages from './Languages'
import Weather from './Weather'

const CountryInfo = ({country}) => {

    return (
        <div key={country.name}>
                <h1>{country.name}</h1>
                <div>capital: {country.capital}</div>
                <div>population: {country.population}</div>
                <h2>languages</h2>
                <Languages country={country} />
                <img src={country.flag} alt={`Flag of ${country.name}`} height="170" width="170"/>
                <Weather country={country}/>
            </div>
    )
}

export default CountryInfo