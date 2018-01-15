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
  ships: () => Requests.getShip(''),
  characters: () => Requests.getCharacter(''),
  films: () => Requests.getFilm(''),
  planets: () => Requests.getPlanet(''),
  vehicles: () => Requests.getVehicle(''),
  species: () => Requests.getSpecies(''),
}

export default {
  Requests,
  RequestAll,
}
