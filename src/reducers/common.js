import keyTypes from '../keyTypes'

const initialState = {
  resultsData: [],
  loading: false,
  errors: [],
  searchType: '',
}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case keyTypes.ASYNC_START:
      return {
        ...state,
        loading: true,
      }
    case keyTypes.GET_DATA:
      if (action.subtype === 'results') {
        return {
          ...state,
          resultsData: action.error ? [] : action.payload,
          loading: false,
          errors: action.error ? [...state.errors, action.payload] : state.errors,
        }
      }
      return state
    case keyTypes.SEARCH_VALUE_CHANGE:
      return {
        ...state,
        [action.key]: action.payload,
      }
    case keyTypes.CLEAR_DATA:
      return {
        ...state,
        [action.key]: [],
      }
    default:
      return state
  }
}

export default commonReducer
