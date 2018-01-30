import keyTypes from '../keyTypes'

const getData = (subtype, payload) => ({
  type: keyTypes.GET_DATA,
  subtype,
  payload,
})

const searchValueChange = (key, payload) => ({
  type: keyTypes.SEARCH_VALUE_CHANGE,
  key,
  payload,
})

const clearData = subtype => ({
  type: keyTypes.CLEAR_DATA,
  subtype,
})

const clearError = () => ({
  type: keyTypes.CLEAR_ERROR,
})

export default {
  getData,
  searchValueChange,
  clearData,
  clearError,
}
