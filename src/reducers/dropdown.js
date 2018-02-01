import keyTypes from '../keyTypes'

const initialState = {
  data: [],
  page: 1,
}

const dropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case keyTypes.GET_DATA:
      if (action.subtype === 'dropdown') {
        return {
          ...state,
          data: action.error ? [] : action.payload,
        }
      }
      return state
    case keyTypes.CLEAR_DATA:
      if (action.subtype === 'dropdown') {
        return {
          ...state,
          data: [],
        }
      }
      return state
    case keyTypes.CLEAR_ALL:
      return {
        ...state,
        data: [],
      }
    case keyTypes.SEARCH_VALUE_CHANGE:
      return {
        ...state,
        page: 1,
      }
    case keyTypes.RESULTS_LIST_PAGE_FORWARDS:
      return {
        ...state,
        page: state.page + 1,
      }
    case keyTypes.RESULTS_LIST_PAGE_BACKWARDS:
      return {
        ...state,
        page: state.page - 1,
      }
    default:
      return state
  }
}

export default dropdownReducer
