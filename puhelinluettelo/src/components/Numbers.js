import React from 'react';
import Person from './Person';

const Numbers = ({persons, setPersons, messager}) => {
    //Saaduista henkilöistä muodostetaan html-koodia Person-komponentin ja map-funktion avulla
    const contacts = () => persons.map(person => <Person 
        key={person.name} 
        person={person} 
        group={persons} 
        setGroup={setPersons}
        messager={messager}/>)
    return(
        <div>
            {contacts()}
        </div>
    )
}
export default Numbers