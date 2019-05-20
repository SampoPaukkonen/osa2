
import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'
//Haetaan kaikki yhteystiedot
const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}
//Päivitetään yhteystietoja
const update = (id, noteObject) => {
    const request = axios.put(`${baseURL}/${id}`, noteObject)
    return request.then(response => response.data)
}
//Luodaan uusi yhteystieto
const create = newObject => {
    const request = axios.post(baseURL, newObject)
    return request.then(response => response.data)
}
//Poistetaan yhteystieto
const neutralize = id => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => response.data)
}

export default {getAll, update, create, neutralize}
