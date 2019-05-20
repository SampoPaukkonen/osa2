import React from 'react'

const Country = ({country, setCountry}) => {

    const handleClick = () => {
        setCountry(country.name)
    }

    return (
        <div>
        {country.name}
        <button type="button" onClick={handleClick}>Show</button>
        </div>
    )
}

export default Country