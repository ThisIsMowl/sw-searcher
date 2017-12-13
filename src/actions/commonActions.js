import keyTypes from '../keyTypes'

const loadTest = payload => ({
  type: keyTypes.LOAD_TEST,
  payload,
})

export default {
  loadTest,
}
