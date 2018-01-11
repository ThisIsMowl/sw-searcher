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

export default {
  getData,
  searchValueChange,
  unloadPage,
}
