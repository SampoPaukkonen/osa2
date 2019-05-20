import React, {useState, useEffect} from 'react';
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'
import NoteService from './components/SpecialNoteService'
import Message from './components/Message'
import ErrorMessage from './components/ErrorMessage'


const App = () => {
  //Henkilöt
  const [persons, setPersons] = useState([])
  //Henkilötiedot haetaan serveriltä
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  //Uusi henkilö, sekä uuden henkilön tila (tekstikenttä)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [targetName, setTargetName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')

  //Kun lisää-nappia painetaan vaihtaa setNewName newName:n tilan arvon (event.target.value), jotta 
  //tapahtumankäsittelijä addContact voi lisätä uuden henkilön puhelinluetteloon
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  //Kun lisää-nappia painetaan vaihtaa setNewNumber newNumber:n tilan arvoksi (event.target.value), jotta
  //tapahtumankäsittelijä addContanct voi lisätä uuden henkilön puhelinluetteloon
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  //Kun nimien rajaus -kenttään syötetään tekstiä rajataan henkilöitä annetun kohde-
  //merkkijonon perusteella
  const handleTargetChange = (event) => {
    setTargetName(event.target.value)
  }
  //Näytetään viesti kolmen sekunnin ajan
  const displayMessage = (message) => {
    setMessage(
      `${message}`
    )
    setTimeout(() => {setMessage('')}, 3000)
  }
  //Näytetään virheviesti kolmen sekunnin ajan
  const displayErrorMessage = (message) => {
    setErrorMessage(
      `${message}`
    )
    setTimeout(() => {setMessage('')}, 3000)
  }

  //Rajaa henkilöitä annetun kohdenimen mukaan
  //Jos kohdenimi on tyhjä, eli käyttäjä ei ole antanut tekstikenttään syötettä
  //niin palautetaan kaikki nimet
  const personsToShow = (targetName) => {
    if (targetName) {
      const value = persons.filter(person => person.name.includes(targetName))
      return value
    }
    else {
      return persons
    }
  }
  //Uuden henkilön lisäys henkilöihin, sekä tekstikenttien resetointi
  //Uuden henkilön nimen arvo on tilan newName arvo ja puhelinnumeron arvo
  //on newNumber:n arvo
  const addContact = (event) => {
    event.preventDefault()
    //Tarkastetaan onko lisättävä nimi jo luettelossa
    if (persons.map(person => person.name).includes(newName)) {
      const message = `${newName} on jo luettelossa, korvataanko vanha numero uudella?`
      //Result arvoksi määräytyy tosi/epätosi
      const result  = window.confirm(message)
      const target  = persons.filter(person => person.name === newName)[0]
      if (result) {
        //Luodaan lisättävä henkilö
        const changedPerson = {...target, number: newNumber}
        const request = NoteService.update(changedPerson.id, changedPerson)
        request.then(data => {
          setPersons(persons.map(person => person.id === target.id ? data : person))
          displayMessage(`Henkilö ${target.name} päivitetty onnistuneesti`)
        }).catch(error => {
          displayErrorMessage(`Henkilö ${target.name} oli jo poistettu`)
        })
      }
    }
    //Jos nimi ei jo ole luettelossa, niin se lisätään sinne
    else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      const request = NoteService.create(nameObject)
      request.then(data => setPersons(persons.concat(data)))
      //Henkilö lisätään funktionaaliseen tyyliin ja tekstikenttä resetoidaan alla
      displayMessage(`Henkilö ${newName} lisätty onnistunesti`)
      setNewName('');
      setNewNumber('');
    }
  }
  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Message message={message}/>
      <ErrorMessage message={errorMessage}/>
      <Filter targetName={targetName} handleTargetChange={handleTargetChange} /> 
      <h2>lisää uusi</h2>
      <PersonForm addContact={addContact} 
      newName={newName} 
      handleNameChange={handleNameChange} 
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}/>
      <h2>Numerot</h2>
      <Numbers persons={personsToShow(targetName)} setPersons={setPersons} messager={displayMessage} />
    </div>
  )
}

export default App;
