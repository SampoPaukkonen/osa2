import React from 'react'

const NumberInput = ({newNumber, handleNumberChange}) => {
    return (
        <div>
          numero: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
    )
}

export default NumberInput