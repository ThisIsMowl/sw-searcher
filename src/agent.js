// Agent file for handling requests.

import _superagent from 'superagent'
import _promise from 'superagent-promise'
import { bluebird as Promise } from 'bluebird'

const superagent = _promise(_superagent, Promise)

const API_ROOT = 'https://swapi.co/api/'

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`)
}