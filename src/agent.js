// Agent file for handling requests.

import _superagent from 'superagent'
import _promise from 'superagent-promise'
import bluebird from 'bluebird'

const superagent = _promise(_superagent, bluebird)

const API_ROOT = 'https://swapi.co/api/'

const responseBody = res => res.body

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
}

const Requests = {
  getShip: value =>
    requests.get(`starships/${value}`),
  getCharacter: value =>
    requests.get(`people/${value}`),
  getFilm: value =>
    requests.get(`films/${value}`),
  getPlanet: value =>
    requests.get(`planets/${value}`),
  getVehicle: value =>
    requests.get(`vehicles/${value}`),
  getSpecies: value =>
    requests.get(`species/${value}`),
}

const RequestAll = (type, page) => {
  switch (type) {
    case 'film':
      return requests.get(`filmz?page=${page}`)
    case 'species':
      return requests.get(`species?page=${page}`)
    case 'vehicle':
      return requests.get(`vehicles?page=${page}`)
    case 'planet':
      return requests.get(`planets?page=${page}`)
    case 'character':
      return requests.get(`people?page=${page}`)
    case 'starship':
      return requests.get(`starships?page=${page}`)
    default:
      return null
  }
}

export default {
  Requests,
  RequestAll,
}
