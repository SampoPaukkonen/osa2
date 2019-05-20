import React from 'react';
import NameInput from './NameInput'
import NumberInput from './NumberInput'

const PersonForm = ({addContact, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return (
        <div>
        <form onSubmit={addContact}>
        <NameInput newName={newName} handleNameChange={handleNameChange} />
        <NumberInput newNumber={newNumber} handleNumberChange={handleNumberChange} />
        <div>
          <button type="submit">lisää</button>
        </div>
        </form>
        </div>
        
    )
}

export default PersonForm