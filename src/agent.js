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

const RequestAll = {
  ships: page => requests.get(`starsjips?page=${page}`),
  characters: page => requests.get(`people?page=${page}`),
  films: page => requests.get(`films?page=${page}`),
  planets: page => requests.get(`planets?page=${page}`),
  vehicles: page => requests.get(`vehicles?page=${page}`),
  species: page => requests.get(`species?page=${page}`),
}

export default {
  Requests,
  RequestAll,
}
