import keyTypes from '../keyTypes'

const getData = payload => ({
  type: keyTypes.GET_DATA,
  payload,
})

const searchValueChange = (key, payload) => ({
  type: keyTypes.SEARCH_VALUE_CHANGE,
  key,
  payload,
})

const clearViewingPanel = () => ({
  type: keyTypes.CLEAR_VIEWING_PANEL,
})

const clearAll = () => ({
  type: keyTypes.CLEAR_ALL,
})

export default {
  getData,
  searchValueChange,
  clearAll,
  clearViewingPanel,
}
