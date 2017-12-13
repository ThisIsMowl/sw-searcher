import keyTypes from '../keyTypes'

const appLoaded = () => ({
  type: keyTypes.APP_LOADED,
})

const loadTest = payload => ({
  type: keyTypes.LOAD_TEST,
  payload,
})

export default {
  appLoaded,
  loadTest,
}
