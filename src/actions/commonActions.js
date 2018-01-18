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

const clearData = key => ({
  type: keyTypes.CLEAR_DATA,
  key,
})

export default {
  getData,
  searchValueChange,
  clearData,
}
