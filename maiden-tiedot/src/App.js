import React, {useState, useEffect} from 'react';
import Filter from './components/Filter'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const[targetCountry, setTargetCountry] = useState('')
  const[countries, setCountries] = useState([])
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleTargetChange = (event) => {
    return setTargetCountry(event.target.value)
  }

  const filterCountries = (targetCountry) => {
    const value = countries.filter(country => country.name.includes(targetCountry))
    return value
  }

  return(
    <div>
      <Filter targetCountry={targetCountry} handleTargetChange={handleTargetChange}/>
      <Countries  countries={filterCountries(targetCountry)} setCountry={setTargetCountry} />
    </div>
  )
}



export default App
