import React from 'react';


const Total = ({exercises}) => {

    const reducer = (accumulator, currentValue) => accumulator + currentValue

    return (
        <div>
        <p>yhteensä {exercises.reduce(reducer)}</p>
        </div>
    )
}

export default Total