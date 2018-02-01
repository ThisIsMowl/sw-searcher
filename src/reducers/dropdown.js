import keyTypes from '../keyTypes'

const initialState = {
  data: [],
  page: 1,
}

const dropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case keyTypes.GET_DATA:
      return {
        ...state,
        data: action.error ? [] : action.payload,
      }
    case keyTypes.CLEAR_DROPDOWN:
      return {
        ...state,
        data: [],
      }
    case keyTypes.CLEAR_ALL:
      return {
        ...state,
        data: [],
        page: 1,
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
