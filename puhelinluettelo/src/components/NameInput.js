import React from 'react'

const NameInput = ({newName, handleNameChange}) => {
    return (
        <div>
          nimi: <input value={newName} onChange={handleNameChange}/>
        </div>
    )
}


export default NameInput