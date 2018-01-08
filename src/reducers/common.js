import keyTypes from '../keyTypes'

const initialState = {
  data: [],
  loading: false,
  errors: [],
  searchType: 'film',
}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case keyTypes.ASYNC_START:
      return {
        ...state,
        loading: true,
      }
    case keyTypes.LOAD_TEST:
      return {
        ...state,
        data: action.error ? [] : action.payload,
        loading: false,
        errors: action.error ? [...state.errors, action.payload] : state.errors,
      }
    case keyTypes.SEARCH_VALUE_CHANGE:
      return {
        ...state,
        [action.key]: action.payload,
      }
    default:
      return state
  }
}

export default commonReducer
