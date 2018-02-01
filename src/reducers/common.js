import keyTypes from '../keyTypes'

const initialState = {
  data: [],
  loading: false,
  error: '',
  searchType: '',
}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case keyTypes.CLEAR_ALL:
      return {
        ...state,
        error: '',
        searchType: '',
        data: [],
      }
    case keyTypes.ASYNC_START:
      return {
        ...state,
        loading: true,
      }
    case keyTypes.GET_DATA:
      return {
        ...state,
        loading: false,
        error: action.error ? action.payload.status : '',
      }
    case keyTypes.SEARCH_VALUE_CHANGE:
      return {
        ...state,
        [action.key]: action.payload,
      }
    case keyTypes.MOVE_TO_RESULTS_PANEL:
      return {
        ...state,
        data: action.payload,
      }
    case keyTypes.CLEAR_DATA:
      if (action.subtype === 'results') {
        return {
          ...state,
          data: [],
        }
      }
      return state
    default:
      return state
  }
}

export default commonReducer
