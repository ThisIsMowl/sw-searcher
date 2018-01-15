import keyTypes from '../keyTypes'

const getData = (key, payload) => ({
  type: keyTypes.GET_DATA,
  key,
  payload,
})

const searchValueChange = (key, payload) => ({
  type: keyTypes.SEARCH_VALUE_CHANGE,
  key,
  payload,
})

const unloadPage = () => ({
  type: keyTypes.UNLOAD_PAGE,
})

const clearData = key => ({
  type: keyTypes.CLEAR_DATA,
  key,
})

export default {
  getData,
  searchValueChange,
  unloadPage,
  clearData,
}
