import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Weather = ({country}) => {
    
    const[weather, setWeather] = useState([]);
    const[showWeather, setShowWeather] = useState(false)


    useEffect(() => {
        const address = `http://api.apixu.com/v1/current.json?key=08123edc3f644523b2e124012191905 &q=${country.capital}`
        axios
            .get(address)
            .then(response => {
                setWeather(response.data.current)
                setShowWeather(true)
            })
    }, [country.capital])
    
    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            {
                !showWeather
                ?<p>Loading weather...</p>
                :(<div>
                    <p>Temperature: {weather.temp_c} °C</p>
                    <img src={weather.condition.icon} alt={weather.condition.text}/>
                    <p>Wind: {weather.wind_kph} km/h {weather.wind_dir}</p>
                </div>)
            }
        </div>
    )
}


export default Weather