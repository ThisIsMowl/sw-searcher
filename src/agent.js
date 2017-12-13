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

const getShip = value => requests.get(`starships/${value}`)
const getCharacter = value => requests.get(`people/${value}`)
const getFilm = value => requests.get(`films/${value}`)
const getPlanet = value => requests.get(`planets/${value}`)
const getVehicle = value => requests.get(`vehicles/${value}`)
const getSpecies = value => requests.get(`species/${value}`)

export default {
  getShip,
  getCharacter,
  getFilm,
  getPlanet,
  getVehicle,
  getSpecies,
}
