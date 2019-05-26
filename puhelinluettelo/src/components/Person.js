import React, {useState} from 'react';
import NoteService from './SpecialNoteService'
const Person = ({person, group, setGroup, messager}) => {
        //Asetetaan yhteystiedon henkilön tila
        const [target] = useState(person)
        //Voidaan poistaa yhteystieto, kun käyttäjä painaa nappia
        const neutralizeTarget = (person, group, setGroup) => {
                const request = NoteService.neutralize(target._id)
                request.then(setGroup(group.filter(sub => sub._id !== person._id)))
        }
        //Kysytään käyttäjältä haluaako hän poistaa yhteystiedon ja 
        //jos haluaa, niin yhteystieto poistetaan
        const confirmNeutralization = () => {
                const message = `Poistetaanko ${target.name}?`
                const result = window.confirm(message)
                if (result) {
                        neutralizeTarget(target, group, setGroup)
                        messager(`Henkilö ${target.name} poistettu onnistuneesti`)
                }
        }
        return (
                <div>
                {person.name} {person.number}
                <button type="button" onClick={confirmNeutralization}>poista</button>
                </div>
        )
}
        
export default Person